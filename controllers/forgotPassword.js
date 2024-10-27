import sgMail from "@sendgrid/mail"
import dotenv from "dotenv";

dotenv.config();

if (!process.env.SGMAIL_API_KEY || !process.env.SGMAIL_EMAIL) {
  throw new Error("SendGrid API key or email is missing from environment variables");
}

sgMail.setApiKey(process.env.SGMAIL_API_KEY);

const sendPasswordResetEmail = async (email, resetURL) => {
    const msg = {
      to: email, 
      from: process.env.SGMAIL_EMAIL, 
      subject: "Password Reset Request",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #0056b3;">Password Reset Request</h2>
            <p>You requested to reset your password for your account. Please click the button below to reset it:</p>
            <p style="text-align: center;">
                <a href="${resetURL}" style="background-color: #0056b3; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                  Reset Your Password
                </a>
            </p>
            <p>If you did not request a password reset, ignore this email. The link will expire in 24 hours.</p>
        </div>
      `,
    };
  
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({message: "Unable to send email"})
    }
  };

const forgotPassword = async (req, res, pool) => {
    
    const { email } = req.body;

    const client = await pool.connect();
    try {
        const findUser = await client.query("SELECT * FROM login WHERE email = $1", [email])

        if (!findUser.rows.length) {
            return res.status(200).json({ message: 'If the email exists, a password reset email has been sent.' });
          }
        try {  
            await client.query("UPDATE login SET reset_requested = true WHERE email = $1", [email]);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update reset request' });
          }
        const appURL = process.env.REACT_APP_FRONT_END_URL
        const resetURL = `${appURL}/reset-password/${findUser.rows[0].id}`;

        try {
            await sendPasswordResetEmail(email, resetURL);
            return res.status(200).json({ message: 'If the email exists, a password reset email has been sent.' });
        } catch (error) {
            return res.status(500).json({ message: 'Error sending email. Please try again later.' });
        } finally {
          client.release();
        }
    }
    catch(error){
        res.status(500).json({ error: 'There is an internal server error' });
    }
}

export default forgotPassword