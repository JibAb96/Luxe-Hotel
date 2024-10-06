const editBooking = async (req, res, pool) => {
    const { id } = req.params;
    const { checkIn, checkOut, roomType, guests, price } = req.body;
    console.log( checkIn, checkOut, roomType, guests, price )

    if (checkIn >= checkOut) {
        res.status(400).json("Check-in date must be before check-out date.", "alert-danger");
        return;
    }

    try {
        const update = await pool.query(
            `UPDATE bookings 
             SET check_in = $2, check_out = $3, room_type = $4, guests = $5, price = $6  
             WHERE id = $1`,
            [id, checkIn, checkOut, roomType, guests, price]
        );
        if (update.rowCount === 0) {
            throw new Error('No booking found with the given ID');
        }
        res.json("Update successful");
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }}

export default editBooking