import React from "react";
import Post from "./Post/Post";
import { useContext } from "react";
import postContext from "../../context/postContext";
import { useEffect } from "react";
import "./Posts.css";
const Posts = () => {
  const { getPost, posts } = useContext(postContext);

  useEffect(() => {
    getPost();
    console.log(posts);
  }, []);
  return (
    <div className="postsitem">
      {posts.map((post, ind) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
