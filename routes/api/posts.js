const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  try {
    const post = await Post.create({ title, body });
    return res.json(post);
  } catch (err) {
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
