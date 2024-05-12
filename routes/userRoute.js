const express = require('express')
const {signUp, signIn} = require("../controllers/userController.js")


const router = express.Router();

//Sign Up route
router.post("/api/users/signup", signUp)

//Sign In route
router.post("/api/users/signin", signIn)




module.exports = router