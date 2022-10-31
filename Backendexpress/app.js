const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require("cors")
//requiring the DOT ENV file for private api KEY
require("dotenv/config")
app.use(bodyParser.json())

app.use(cors())

// Import Routes
const postsRoute = require("./routes/posts")

app.use("/posts", postsRoute)

// Routes
app.get("/", (req, res) => {
  res.send("Getting all")
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected")
})

// listenings to the server
app.listen(5000)
