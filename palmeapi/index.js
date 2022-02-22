const express = require("express")
const app = express()
var cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Db connection is successful"))
.catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
// app.use("/api/users", userRoute)
app.use("/api", authRoute)
app.use("/", authRoute)
app.get("/users", (req, res) => {
    res.json({msg :"hello"})
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
})