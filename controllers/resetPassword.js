const resetPassword = async (req, res, pool, bcrypt) => {
    
    const { id } = req.params;

    const { password } = req.body;
    
    try{

        const selectUser = await pool.query("SELECT * FROM login WHERE id = $1 AND reset_requested = true", [id]);

        if(!selectUser.rows.length) {
            return res.status(400).json({message: "Invalid or no reset request found"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query("UPDATE login SET hash = $1, reset_requested = false WHERE id = $2", [hashedPassword, id]);

        res.json({ message: "Password has been reset successfully" });
        
    } catch (error){
        res.status(500).json({ message: error })
    }
}

export default resetPassword