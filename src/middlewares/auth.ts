import jwt, { JwtPayload } from 'jsonwebtoken';

import dotenv from "dotenv";

dotenv.config()



export const isAuthenticated =  (req :any, res:any, next:any) =>{
 try {
    let token = req.get("authorization");
    if (!token){
        return res.status(404).json({ success: false, msg: "Token not  found" });
    }                                                             
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    req  = {emaail :decoded.email }
    next();
    } catch (error) {
         return res.status(401).json({ success: false, msg: error.message });
    }
}
