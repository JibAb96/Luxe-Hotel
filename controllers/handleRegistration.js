const handleRegistration = async (req, res, pool, bcrypt) => {
    const { email, password, username, firstName, lastName, phone, address, city, country, postalCode, dob} = req.body;

    // Validate input
    if (!email || !username || !password) {
        return res.status(400).json({ error: 'Email, username, and password are required' });
    }

    const saltRounds = 10;

    const hash = await bcrypt.hash(password, saltRounds);

    try {
        await pool.query('BEGIN');

        const existingUser = await pool.query(
            'SELECT email FROM profiles WHERE email = $1',
            [email]
        );
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        
        const resultLogin = await pool.query(
            `INSERT INTO login (email, password) VALUES ($1, $2) RETURNING email`,
            [email, hash]
        );

        // Insert into users table
        const resultUser = await pool.query(
            `INSERT INTO users (email, username, first_name, last_name, phone, address, city, country, postal_code, date_of_birth) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [resultLogin.rows[0].email, username, firstName, lastName, phone, address, city, country, postalCode, dob]
        );

        await pool.query('COMMIT');
        res.status(201).json("success");
    } catch (error) {
        await pool.query('ROLLBACK'); // Rollback transaction on error
        
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Email already exists' });
        }    
        
        console.error(error);
        
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default handleRegistration;