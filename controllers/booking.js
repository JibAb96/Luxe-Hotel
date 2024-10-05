const booking = async (req, res, pool) => {
    const { id } = req.body;
    const {checkIn, checkOut, roomType, guests, price} = req.body;

    if(!id || !checkIn || !checkOut || !roomType || !guests || !price){
        console.log({userId, checkIn, checkOut, roomType, guests, price})
        return res.status(400).json("All fields need to be field out")
    }

    try{

        await pool.query("BEGIN")

        const insertBooking = await pool.query(
            `INSERT INTO bookings(profile_id, check_in, check_out, room_type, guests, price) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id, checkIn, checkOut, roomType, guests, price]
        )
        
        await pool.query("COMMIT");
        res.status(201).json(insertBooking.rows[0])
    }
    catch(error){
        await pool.query("ROLLBACK");
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default booking