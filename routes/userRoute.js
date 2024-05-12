const express = require('express')
const {signUp, getAllUsers, getSingleUser, updateUser, signIn} = require("../controllers/userController.js")
const adminAuth = require('../middleware/adminAuth.js')

const router = express.Router();

//Sign Up route
router.post("/api/users/signup", signUp)

//Sign In route
router.post("/api/users/signin", signIn)

// GET a single user
router.get("/api/users/:id", getSingleUser)

//EDIT/UPDATE user route
router.patch("/api/users/:id", updateUser)


//Protecting routes
router.use(adminAuth)

//Admin GET all users route
router.get("/api/users", getAllUsers)



module.exports = router