const resetPassword = async (req, res, pool, bcrypt) => {
    
    const { id } = req.params;

    const { password } = req.body;
    if(!password){
        return res.status(400).json({message: "Password is required"})
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const validatePassword = (password) => passwordRegex.test(password)
    
    if(!validatePassword(password)){
        return res.status(400).json({message: "Password does not match requirements"})
    }

    const client = await pool.connect();
    try{

        const selectUser = await client.query("SELECT * FROM login WHERE id = $1 AND reset_requested = true", [id]);

        if(!selectUser.rows.length) {
            return res.status(400).json({message: "Invalid or no reset request found"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await client.query("UPDATE login SET hash = $1, reset_requested = false WHERE id = $2", [hashedPassword, id]);

        res.json({ message: "Password has been reset successfully" });
        
    } catch (error){
        res.status(500).json({ message: error.message ||"Internal Server Error"})
    } finally {
        client.release();
    }
}

export default resetPassword