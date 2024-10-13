const confirmBookings = async (req, res, pool) => {
    const { id } = req.params;
    try{
        const data = await pool.query("SELECT * FROM bookings WHERE id = $1", [id])
        if (!data.rows.length > 0){
            return res.status(500).json({message: "Booking doesn't exist"})
        }
        res.json(data)
    } 
    catch (error){
        res.status(500).json({message: "Server Error"})
    }
}

export default confirmBookings