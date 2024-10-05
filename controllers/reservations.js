const reservations = async (req, res, pool) => {
    const { id } = req.params;
    try{
        const selectBookings = await pool.query("SELECT * FROM bookings WHERE profile_id = $1",
            [id])
        
            if (selectBookings.rows.length === 0) {
            return res.status(404).json("No bookings found for this user");
        }

        res.json(selectBookings.rows);
    }
    catch (error){
        console.error('Database query error:', error);
        res.status(500).json("Internal server error");
    }
}

export default reservations