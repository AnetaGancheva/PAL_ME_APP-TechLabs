const router = require("express").Router()

router.get("/users", (req,res) => {
    res.send("hi")
})
router.post("/userposttest", (req,res) => {
    const username = req.body.username
    console.log(username)

})
module.exports = router