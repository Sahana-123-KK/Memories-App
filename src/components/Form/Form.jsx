import React from "react";
import { useState } from "react";
//converts images or files to string
import FileBase from "react-file-base64";
import { useContext } from "react";
import postContext from "../../context/postContext";
import { useEffect } from "react";
const Form = () => {
  const { createPost, getPost, updatep, postid, posts, setPostid } =
    useContext(postContext);

  const [postDetails, setPostDetails] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (postid) {
      let editpost = posts.filter((post, id) => {
        return post._id === postid;
      });
      console.log(editpost);
      setPostDetails(editpost[0]);
    }
  }, [postid]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };
  const getTags = (e) => {
    const { value } = e.target;
    let str = value;
    let arr = str.split(",");
    setPostDetails({ ...postDetails, tags: arr });
  };
  const postFunction = async (e) => {
    e.preventDefault();
    if (postid) {
      updatep(postid, postDetails);
      console.log(postDetails);
      setPostid(null);
    } else {
      createPost(postDetails);
    }
    clearForm();
    getPost();
  };
  const clearForm = () => {
    setPostDetails({
      title: "",
      message: "",
      creator: "",
      tags: "",
      selectedFile: "",
    });
    if (postid) {
      setPostid(null);
    }
  };
  return (
    <div>
      <form onSubmit={postFunction}>
        <h3>{postid ? "Edit" : "Create"} Post</h3>
        <div className="mb-3">
          <label htmlFor="creator" className="form-label">
            Creator
          </label>
          <input
            required
            value={postDetails.creator}
            onChange={handleChange}
            name="creator"
            type="text"
            className="form-control"
            id="creator"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            value={postDetails.title}
            onChange={handleChange}
            name="title"
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            value={postDetails.message}
            onChange={handleChange}
            name="message"
            type="text"
            className="form-control"
            id="message"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            value={postDetails.tags}
            onChange={getTags}
            name="tags"
            type="text"
            className="form-control"
            id="tags"
          />
        </div>

        {/* For images to convert to string format... */}
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setPostDetails({ ...postDetails, selectedFile: base64 });
          }}
        />

        <button type="submit" className="mt-2 btn btn-primary">
          {postid ? "Update" : "Create"}
        </button>
      </form>
      <button onClick={clearForm} className=" mt-2 btn btn-primary">
        Clear
      </button>
    </div>
  );
};

export default Form;
