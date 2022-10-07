const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");
const router = express.Router();

router.get(
  "/",
  getPosts
  // (req, res) => {
  //   res.send("This is good");
  // }
);
router.post("/createpost", createPost);
router.put("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost);
router.put("/likepost/:id", likePost);

module.exports = router;
