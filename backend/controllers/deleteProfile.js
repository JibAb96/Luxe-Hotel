const deleteProfile = async (req, res, pool) => {
    const { id } = req.params;
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const deletedProfile = await client.query("DELETE FROM profiles WHERE id = $1 RETURNING *", [id]);
        if (deletedProfile.rows.length === 0) {
            await client.query("ROLLBACK");
            return res.status(404).json({ message: "Profile not found" });
        }
        
        const deletedLogin = await client.query("DELETE FROM login WHERE id = $1 RETURNING *", [id]);
        if (deletedLogin.rows.length === 0) {
            await client.query("ROLLBACK");
            return res.status(404).json({ message: "Login not found" });
        }

        await client.query("COMMIT");

        res.status(200).json({ success: true, message: "Profile and login deleted successfully" });
    } catch (error) {
        await client.query("ROLLBACK");
        console.error(error.message);
        res.status(500).json({
            message: "Server Error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        client.release();
    }
};

export default deleteProfile;