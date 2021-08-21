const User = require('../models/User')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const register = async(req,res) => {
    const {name,lastName,email,password} = req.body
    try {
        //1. check existance user
        let user =await  User.findOne({email})
        if(user) return res.status(400).json({err:"you are already registred"})
        // create user 
        let newUser =  new User({
            name,lastName,email,password
        })
        // hash password
        const salt = await bcrypt.genSalt(10)
        console.log(salt)
        newUser.password = await bcrypt.hash(password,salt)
        //save user
        newUser = await newUser.save()
        //generate token
        const payload = {
            userID : newUser._id
        }
        var token = jwt.sign(payload,process.env.SECRET_KEY);

        res.send({
            token,
            user:{
                _id:newUser._id,
                name:newUser.name,
                lastName:newUser.lastName,
                email:newUser.email
            }
        })


        
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}

const login = async (req,res) => {
    const {email,password} = req.body
    try {
        // check if user registred
        let existUser = await User.findOne({email})
        if(!existUser) return res.status(401).json({err:"bad credienls email"})
        // compare password
        let isMatch = await bcrypt.compare(password,existUser.password)
        if(!isMatch) return res.status(401).json({err:"bad credentials password"})
        //
          //generate token
          const payload = {
            userID : existUser._id
        }
        var token = jwt.sign(payload,process.env.SECRET_KEY);

        res.send({
            token,
            user:{
                _id:existUser._id,
                name:existUser.name,
                lastName:existUser.lastName,
                email:existUser.email
            }
        })
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}

const getCurrentUser = (req,res) => {
    res.send(req.user)
}


module.exports= {register,login, getCurrentUser}