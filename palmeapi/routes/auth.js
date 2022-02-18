const router = require("express").Router()
const User = require('../models/User')
const CryptoJs = require('crypto-js')
// const jwt = require('jsonwebtoken')

// REGISTER
router.post("/register", async (req,res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    // const confirmedPassword = req.body.confirmedPassword
    if ( username === "" || password === "" || email === ""){
        res.status(500).json("Please enter a username ,email and password")
    } else {
         const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:  CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(), 
        })

        try {
            await User.findOne({username}) &&  res.status(401).json("Username has already taken, please choose another username!")
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
        } catch (err){
            res.status(500).json(err)
        }
    }
    
    
})

// LOGIN 
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({username: req.body.username})

        !user && res.status(401).json("Wrong User Name!")

        const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC)

        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8)
    

        originalPassword !== req.body.password && res.status(401).json("Wrong credentials!")

        // const accessToken = jwt.sign({
        //     id: user._id,
        //     isAdmin: user.idAdmin,
        // }, process.env.JWT_SEC, 
        //    {expiresIn:"3d"})

        const {password, ...others} = user._doc

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }

})

module.exports = router