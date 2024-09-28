const handleSignIn = async (req, res, pool, bcrypt) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json("email and password required");
    }

    const saltRounds = 10;

    const hash = await bcrypt.hash(password, saltRounds);

    try {
        await pool.query('BEGIN');
        
        const loginQuery = 'SELECT email, hash FROM login WHERE email = $1';
        const loginResults = await pool.query(loginQuery, [email])

        if(loginResults.rows.length > 0){
            const userData = loginResults.rows[0];
            const isValid = bcrypt.compareSync(password, userData.hash)

            if(isValid){
                const profileQuery = 'SELECT * FROM profiles WHERE email = $1';
                const profileResult = await pool.query(profileQuery, [email])

                if(profileResult.rows.length > 0){
                    res.json(profileResult.rows[0])
                } else{
                    res.status(400).json('Unable to get user')
                }
            } else {
                res.status(400).json('Wrong credentials')
            }
        } else{
            res.status(400).json('Unable to get user')
        }

    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json("Internal server error");
    }
};

export default handleSignIn;