const deleteProfile = async (req, res, pool) => {
    const { id } = req.params;
    try {
        const deleteProfile = await pool.query('DELETE FROM profiles WHERE id = $1 RETURNING *', [id]);
        if(deleteProfile.rows.length === 0){
            return res.status(404).json("No such profile exists");
        }     
        res.json(deleteProfile.json("Profile was successfully deleted"));
    }
    catch (error){
        console.error(error.message);
        res.status(500).json("Server Error");
    }
}