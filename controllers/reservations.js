const reservations = async (req, res, pool) => {
    const { id } = req.params;
    const client = await pool.connect();
    try {
        const selectBookings = await client.query("SELECT * FROM bookings WHERE profile_id = $1", [id]);
        
        if (selectBookings.rows.length === 0) {
            return res.status(404).json({ message: "No bookings found for this user" });
        }

        const adjustedBookings = selectBookings.rows.map(booking => {
            // Create a new Date object to adjust for the local timezone
            const localCheckIn = new Date(booking.check_in);
            const localCheckOut = new Date(booking.check_out);

            return {
                ...booking,
                check_in: localCheckIn.toLocaleString("sv-SE", { timeZone: "Europe/Berlin" }),
                check_out: localCheckOut.toLocaleString("sv-SE", { timeZone: "Europe/Berlin" }),
            };
        });
        res.json(adjustedBookings);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        client.release();
    }
}

export default reservations