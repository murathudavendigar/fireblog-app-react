import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateBlog, useFetchById } from "../utils/functions";

const UpdateBlog = () => {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateImageURL, setUpdateImageURL] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const location = useLocation();
  const updatedBlogId = location.state;
  const { blogList } = useFetchById(updatedBlogId);

  const initialValues = {
    title: blogList.title,
    imageURL: blogList.imageURL,
    content: blogList.content,
  };

  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // editBlog(updatedBlogId, updateTitle, updateImageURL, updateContent);
    setInfo(blogList);
    // updateBlog(info, updatedBlogId);
    // addBlog(info, navigate);
    // setUpdateTitle(blogList?.title);
  };
  console.log(info);

  // const editBlog = (id, title, imageURL, content) => {
  //   setInfo({ id, title, imageURL, content });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          name="title"
          value=""
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <input
          placeholder="image"
          name="imageURL"
          value={blogList?.imageURL}
          onChange={(e) => setUpdateImageURL(e.target.value)}
        />
        <input
          placeholder="content"
          name="content"
          value={blogList?.content}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
