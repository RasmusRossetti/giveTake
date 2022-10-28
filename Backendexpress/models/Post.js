const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
  size: {
    type: String,
    required: true
  },
  bodys: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  shirts: {
    type: String,
    required: true
  },
  pants: {
    type: String,
    required: true
  },
  kicksuits: {
    type: String,
    required: true
  },
  socks: {
    type: String,
    required: true
  },
  bg: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Posts", PostSchema)
