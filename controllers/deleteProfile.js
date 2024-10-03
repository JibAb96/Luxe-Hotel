const deleteProfile = async (req, res, pool) => {
    const { id } = req.params;
    try {
        const deleteProfile = await pool.query("DELETE FROM profiles WHERE id = $1 RETURNING *", [id]);
        const deleteLogin = await pool.query("DELETE FROM login WHERE id = $1 RETURNING *", [id]);
        res.json("Profile and login deleted successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
};

export default deleteProfile;
