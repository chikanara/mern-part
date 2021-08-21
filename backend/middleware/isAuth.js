var jwt = require('jsonwebtoken');
const User = require('../models/User');
const isAuth = async(req,res,next) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).send({err:"token doesn't exist"})
    try {
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(decoded){
            let currentUser = await User.findById(decoded.userID).select("-password")
            req.user=currentUser
            next()
        }
    } catch (error) {
        res.status(401).send({err:"Unauthorized"})
    }
}
module.exports=isAuth