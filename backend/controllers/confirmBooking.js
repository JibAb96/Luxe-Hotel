const confirmBookings = async (req, res, pool) => {
    const { id } = req.params;
    const client = await pool.connect();
    try{
        const data = await client.query("SELECT * FROM bookings WHERE id = $1", [id])
        if (data.rows.length === 0){
            return res.status(404).json({message: "Booking doesn't exist"})
        }
        res.json(data.rows[0])
    } 
    catch (error){
        res.status(500).json({
            message: "Server Error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        client.release();
    }
}

export default confirmBookings