const updateProfile = async (req, res, pool) => {
    const { id } = req.params;
    const { firstName, lastName, phone, address, city, country, postalCode, dob } = req.body;

    if (!firstName || !lastName || !phone || !address || !city || !country || !postalCode || !dob) {
        return res.status(400).json({ message: "Please fill out all form fields" });
    }

    const client = await pool.connect();
    try {
        await client.query(
            `UPDATE profiles 
             SET first_name = $2, last_name = $3, phone = $4, address = $5, city = $6, country = $7, postal_code = $8, date_of_birth = $9 
             WHERE id = $1`,
            [id, firstName, lastName, phone, address, city, country, postalCode, dob]
        );
        res.json({ message: "Update successful" });
    } catch (error) {
        console.error("Database update error:", error.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    } finally {
        client.release();
    }
};

export default updateProfile;
