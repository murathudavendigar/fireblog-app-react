import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { addBlog } from "../utils/functions";

const NewBlog = () => {
  const { userContext } = useAuthContext();
  const navigate = useNavigate();

  const dateNow = new Date().toDateString().slice(4);
  const initialValues = {
    title: "",
    imageURL: "",
    content: "",
    author: userContext.email || "",
    date: dateNow,
  };

  const [info, setInfo] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addBlog(info, navigate);
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
