const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Db connection is successful"))
.catch((err) => console.log(err))

app.use(express.json())
// app.use("/api/users", userRoute)
app.use("/api", authRoute)
app.use("/", authRoute)
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
})