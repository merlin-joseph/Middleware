
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

var router = express.Router();
dotenv.config()


router.post("/login", (req, res) => {
 const { email } = req.body;
 if (email == 'merlin@gmail.com') {
    const accessToken = jwt.sign({ email: email }, process.env.JWT_SECRET, {
    expiresIn: "100m",
    });
    const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "20m",
    });
    return res.status(200).json({ accessToken,refreshToken });
} else {
    return res
    .status(400)
    .json({ success: false, error: "enter valid credientials" });
}
 });



 export default router;