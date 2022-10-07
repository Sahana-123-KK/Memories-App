const { default: mongoose } = require("mongoose");
const PostModel = require("../models/postModel");

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).send(posts);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, message, creator, selectedFile, tags } = req.body;
    console.log(message);
    const createp = await PostModel.create({
      title,
      message,
      creator,
      selectedFile,
      tags,
    });
    // const createp = "post";
    console.log(createp.message);
    res.status(200).json({ post: createp });
    console.log({ post: createp });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
const updatePost = async (req, res) => {
  try {
    const post = req.body;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not Found" });
    }

    const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.json(updatedPost);
    console.log(updatedPost);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not Found" });
    }

    await PostModel.findByIdAndDelete(id);
    res.json({ message: "Post Deleted Successfully" });
    console.log(res.json());
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const post = await PostModel.findById(id);
    console.log(post);
    // console.log(post.);

    const likePost = await PostModel.findByIdAndUpdate(
      id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );
    res.json(likePost);
    console.log(likePost);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
