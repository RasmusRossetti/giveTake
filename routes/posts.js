const express = require("express")

const Post = require("../models/Post")
const router = express.Router()

// get all posts
router.get("/", async (req, res) => {
  //   res.send("Inside the post");
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

// save post
router.post("/", async (req, res) => {
  const post = new Post({
    size: req.body.size,
    bodys: req.body.bodys,
    shirts: req.body.shirts,
    pants: req.body.pants,
    kicksuits: req.body.kicksuits,
    socks: req.body.socks,
    bg: req.body.bg
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

//get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ message: err })
  }
})

// delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId })
    res.json(removePost)
  } catch (err) {
    res.json({ message: err })
  }
})

// update post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          socks: req.body.socks
        }
      }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
