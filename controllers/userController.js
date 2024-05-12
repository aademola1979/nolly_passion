const { default: mongoose } = require('mongoose');
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken')
const config =require('dotenv').config()

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1h"})

};


const signUp = async(req, res)=>{
    
    try {
        const user = await User.signUp(req.body); 

        //Create token
        const token = createToken(user._id)


        res.status(200).json({email:user.email, token})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

const signIn = async(req, res)=>{
    const {email, password} = await req.body
    try {
        const user = await User.signIn(email, password)

        const token = createToken(user._id)
       
        res.status(200).json({email:user.email, token})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}



module.exports = {
    signUp,
    signIn,
} 