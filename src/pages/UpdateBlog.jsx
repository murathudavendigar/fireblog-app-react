import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { updateBlog, useFetchById } from "../utils/functions";

const UpdateBlog = () => {
  const { userContext } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const updatedBlogId = location.state;
  const { blogList } = useFetchById(updatedBlogId);
  const [info, setInfo] = useState();
  const [updateContent, setUpdateContent] = useState();
  const [updateTitle, setUpdateTitle] = useState();
  const [updateImageURL, setUpdateImageURL] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = location.state;
    editBlog(updateTitle, updateImageURL, updateContent);

    updateBlog(info, id);
    navigate(-1);
  };

  const editBlog = (title, imageURL, content) => {
    setInfo({
      title: title || blogList?.title,
      imageURL: imageURL || blogList?.imageURL,
      content: content || blogList?.content,
      author: blogList?.author,
      date: blogList?.date,
    });
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
              id="exampleInput7"
              placeholder="Title"
              defaultValue={blogList?.title}
              onChange={(e) => setUpdateTitle(e.target.value)}
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
              id="exampleInput8"
              placeholder="Image URL"
              defaultValue={blogList?.imageURL}
              onChange={(e) => setUpdateImageURL(e.target.value)}
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
              id="exampleFormControlTextarea13"
              rows={3}
              placeholder="Content"
              defaultValue={blogList?.content}
              onChange={(e) => setUpdateContent(e.target.value)}
            />
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87"
              required
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck87">
              Agree
            </label>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
