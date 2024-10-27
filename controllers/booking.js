const booking = async (req, res, pool) => {
    const { id } = req.params;
    const {checkIn, checkOut, roomType, guests, price} = req.body;

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
    try{

        await client.query("BEGIN")

        const insertBooking = await client.query(
            `INSERT INTO bookings(profile_id, check_in, check_out, room_type, guests, price) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id, checkIn, checkOut, roomType, guests, price]
        )
        
        await client.query("COMMIT");
        res.status(201).json(insertBooking.rows[0])
    }
    catch(error){
        await client.query("ROLLBACK");
        if (error.code === '23503') { // Foreign key violation
            return res.status(400).json({ error: "Invalid profile ID" });
        }

        res.status(500).json({ 
            error: "Internal server error",
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally{
        client.release();
    }
}

export default booking