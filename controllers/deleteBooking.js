const deleteBooking = async (req, res, pool) => {
    const { id } = req.params;
    try {
        const deleteBooking = await pool.query("DELETE FROM bookings WHERE id = $1 RETURNING *", [id]);
        res.json("Booking was deleted successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
}

export default deleteBooking