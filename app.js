const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require("cors")

require("dotenv/config")
app.use(bodyParser.json())

app.use(cors())

// Import Routes
const postsRoute = require("./routes/posts")

app.use("/posts", postsRoute)

// Now we have the ability to create the routes
// Routes
app.get("/", (req, res) => {
  res.send("Getting all")
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected")
})

// Need to listen to the server
app.listen(3000)
