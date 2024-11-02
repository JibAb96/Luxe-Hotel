import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

// Middleware to create auth token
export const createAuthToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};

// Middleware to verify token
export const verifyAuthToken = (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  };

const handleAuthStatus = async (req, res, pool) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({
                isSignedIn: false,
                user: null
            });
            
        }

        const token = authHeader.split(' ')[1];
        
        // Verify the token
        const decoded = verifyAuthToken(token);
        if (!decoded) {
            return res.json({
                isSignedIn: false,
                user: null
            });
        }

        const client = await pool.connect();
        // Token is valid, get user data
        const userQuery = await client.query(
            'SELECT * FROM profiles WHERE id = $1',
            [decoded.userId]
        );

        if (userQuery.rows.length === 0) {
            return res.json({
                isSignedIn: false,
                user: null
            });
            
        }

        // User is authenticated
        return res.json({
            isSignedIn: true,
            user: userQuery.rows[0]
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error',
            isSignedIn: false,
            user: null
        });
    }
};

export default handleAuthStatus;