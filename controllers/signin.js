const handleSignIn = async (req, res, pool, bcrypt) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json({ message:"Email and password required"});
    }

    try {

        const loginResults = await pool.query('SELECT email, hash FROM login WHERE email = $1', [email])
    
        if(loginResults.rows.length === 0){
            return res.status(400).json({ message:"Invalid Credential" })
        }
    
        const userData = loginResults.rows[0];
        const isValid = await bcrypt.compare(password, userData.hash) 
    
        if(!isValid){
            return res.status(400).json({ messsage:"Invalid credentials" })
        }
    
        const profileResult = await pool.query('SELECT * FROM profiles WHERE email = $1', [email])
    
        if(profileResult.rows.length === 0){
            return res.status(400).json({message: "Unable to get user profile" })
        }
        res.json(profileResult.rows[0]);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message:"Internal server error" });
    }


    
};

export default handleSignIn;