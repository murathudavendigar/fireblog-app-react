import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { addBlog } from "../utils/functions";

const NewBlog = () => {
  const { userContext } = useAuthContext();
  const initialValues = {
    title: "",
    imageURL: "",
    content: "",
    author: userContext.email || "",
  };

  const [info, setInfo] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(info);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          name="title"
          value={info.title}
          onChange={handleChange}
        />
        <input
          placeholder="image"
          name="imageURL"
          value={info.imageURL}
          onChange={handleChange}
        />
        <input
          placeholder="content"
          name="content"
          value={info.content}
          onChange={handleChange}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
