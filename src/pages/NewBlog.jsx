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
    fullName: userContext.displayName || "",
    photoAuthor: userContext.photoURL || "",
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
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-3/4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Title"
              value={info.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Image URL"
              value={info.imageURL}
              onChange={handleChange}
              name="imageURL"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              rows={3}
              placeholder="Content"
              value={info.content}
              onChange={handleChange}
              name="content"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
