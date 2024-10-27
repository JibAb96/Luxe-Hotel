const editBooking = async (req, res, pool) => {
    const { id } = req.params;
    const { checkIn, checkOut, roomType, guests, price } = req.body;

    if(!id || !checkIn || !checkOut || !roomType || !guests || !price){
        return res.status(400).json({
            error: "All fields must be filled out",
            missing: Object.entries({ id, checkIn, checkOut, roomType, guests, price })
                .filter(([, value]) => !value)
                .map(([key]) => key)
        });
    }

    if (!Number.isInteger(Number(guests)) || guests < 1) {
        return res.status(400).json({ error: "Invalid number of guests" });
    }

    if (!Number(price) || price <= 0) {
        return res.status(400).json({ error: "Invalid price" });
    }

    // Date validation
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
    }

    if (checkInDate >= checkOutDate) {
        return res.status(400).json({ error: "Check-in date must be before check-out date" });
    }

    if (checkInDate < new Date()) {
        return res.status(400).json({ error: "Cannot book dates in the past" });
    }

    const client = await pool.connect();

    try {
        const update = await client.query(
            `UPDATE bookings 
             SET check_in = $2, check_out = $3, room_type = $4, guests = $5, price = $6  
             WHERE id = $1`,
            [id, checkIn, checkOut, roomType, guests, price]
        );
        if (update.rowCount === 0) {
            throw new Error('No booking found with the given ID');
        }
        res.staus(200).json({ message:"Update successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message || "Server Error. Please try again later." });
    } finally{
        client.release();
    }}

export default editBooking