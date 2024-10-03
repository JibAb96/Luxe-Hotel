const validateInputs = (email, username, password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        return 'Invalid email format';
    }
    if (!passwordRegex.test(password)) {
        return 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number';
    }
    if (!username) {
        return 'Username is required';
    }
    return null;
};

const handleRegistration = async (req, res, pool, bcrypt) => {
    const { email, password, username, firstName, lastName, phone, address, city, country, postalCode, dob} = req.body;

    const validationError = validateInputs(email, username, password);
    if (validationError) {
        return res.status(400).json({ error: validationError });
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
            `INSERT INTO login (email, hash) VALUES ($1, $2) RETURNING email`,
            [email, hash]
        );

        // Insert into users table
        const resultUser = await pool.query(
            `INSERT INTO profiles (email, username, first_name, last_name, phone, address, city, country, postal_code, date_of_birth) 
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