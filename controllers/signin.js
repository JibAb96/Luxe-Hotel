const handleSignIn = async (req, res, pool, bcrypt) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json("email and password required");
    }

    try {

        const loginResults = await pool.query('SELECT email, hash FROM login WHERE email = $1', [email])
    
        if(loginResults.rows.length === 0){
            return res.status(400).json('Unable to get user')
        }
    
        const userData = loginResults.rows[0];
        const isValid = await bcrypt.compareSync(password, userData.hash) 
    
        if(!isValid){
            return res.status(400).json('Invalid credentials')
        }
    
        const profileResult = await pool.query('SELECT * FROM profiles WHERE email = $1', [email])
    
        if(profileResult.rows.length === 0){
            return res.status(400).json('Unable to get user')
        }
        res.json(profileResult.rows[0]);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json("Internal server error");
    }


    
};

export default handleSignIn;