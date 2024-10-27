const deleteBooking = async (req, res, pool) => {
    
    const { id } = req.params;

    const client = await pool.connect();
    try {
        const deletedBooking = await client.query("DELETE FROM bookings WHERE id = $1 RETURNING *", [id]);
        if (deletedBooking.rows.length === 0) {
            return res.status(404).json({ message: "Booking not found" });
        }        
        res.json("Booking was deleted successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server Error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        client.release();
    }
}

export default deleteBooking