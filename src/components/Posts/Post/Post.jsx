import React from "react";
// import { Link } from "react-router-dom";
import moment from "moment";
import "./Post.css";
import postContext from "../../../context/postContext";
import { useContext } from "react";
const Post = ({ post }) => {
  const { postid, setPostid, deletep, likep } = useContext(postContext);
  const updatePost = () => {
    setPostid(post?._id);
    console.log(post?._id);
  };
  const deletePost = () => {
    deletep(post._id);
  };
  const likePost = () => {
    likep(post._id);
  };
  return (
    <div className="card my-4 cardsize">
      <img
        src={post?.selectedFile}
        className="card-img-top imagesize"
        alt="..."
      />
      <div className="card-body ">
        <p className="iconsedit">
          <i onClick={updatePost} className="fa-solid fa-ellipsis edit"></i>
        </p>
        <h3 className="card-title"> {post?.title} </h3>
        <div className="flexalignrow">
          <span className="my-2">{post?.creator} </span>
          <span className="my-2 time">
            {moment(post?.createdAt).fromNow()}{" "}
          </span>
        </div>
        <p className="card-text">{post?.message}</p>
        {post?.tags.map((tag, ind) => {
          return (
            <span className="hashtag" key={ind}>
              {" "}
              {`#${tag}`}{" "}
            </span>
          );
        })}{" "}
        <div className="actions mt-2">
          <p className="icons likeicon">
            <i
              onClick={likePost}
              className={`fa-solid fa-thumbs-up mx-2 ${
                post?.likeCount === 0 ? "nolike" : "like"
              } `}
            ></i>
            Like {post?.likeCount}{" "}
          </p>
          <p className="icons deleteicon">
            <i
              onClick={deletePost}
              className="fa-solid fa-trash mx-2 delete"
            ></i>
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
