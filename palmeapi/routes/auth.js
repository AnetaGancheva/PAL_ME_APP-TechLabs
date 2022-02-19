const router = require("express").Router()
const User = require('../models/User')
const CryptoJs = require('crypto-js')


// REGISTER
router.post("/register", async (req,res) => {

    const username = req.body.username
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    const confirmedPassword = req.body.confirmedPassword

    if ( username === "" || password === "" || email === "" || confirmedPassword === ""){
        res.status(500).json("Please enter a username ,email and password")
    } else if (password === confirmedPassword) {
        res.status(500).json("Please make sure your passwords match")
    } else {
         const newUser = new User({
            firstname,
            lastname, 
            username,
            email,
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


        const {password, ...others} = user._doc

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }

})

//Get User
router.get('/find/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (error){
        res.status(500).json(err)
    }   
})

// GET ALL USERS 
router.get('/',async (req,res) => {
    // try {
    //     const users = await User.find()
    //     res.status(200).json(users)
    // } catch (error){
    //     res.status(500).json(err)
    // }   
    res.send("Hello World!");
})
module.exports = router