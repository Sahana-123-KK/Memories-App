import react, { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) => {
  const [posts, setPosts] = useState([]);
  const [postid, setPostid] = useState(null);

  const getPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      const js = await response.json();
      console.log(js);
      setPosts(js);
    } catch (error) {
      console.log(error);
    }
  };
  const createPost = async (postbody) => {
    try {
      const { title, message, creator, tags, selectedFile } = postbody;
      const response = await fetch(
        "http://localhost:5000/api/posts/createpost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, message, creator, tags, selectedFile }),
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      alert("Post has been created");
    } catch (error) {
      console.log(error);
      alert("Try Again");
    }
  };

  const updatep = async (postid, post) => {
    console.log(post);
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/updatepost/${postid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      console.log(response);
      const json = await response.json();
      alert("Post updated Successfully");
      console.log(json);
    } catch (error) {
      console.log(error);
      alert("Couldn't Update Post");
    }
  };

  const deletep = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/deletepost/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      getPost();
      alert("Post Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Couldn't Delete Post");
    }
  };

  const likep = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/likepost/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      getPost();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostContext.Provider
      value={{
        getPost,
        createPost,
        posts,
        setPosts,
        postid,
        setPostid,
        updatep,
        deletep,
        likep,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
