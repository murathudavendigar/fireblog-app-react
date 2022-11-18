import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBlog, updateBlog, useFetchById } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";
import { useAuthContext } from "../context/AuthContext";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.state?.data;
  const { userContext } = useAuthContext();

  const { isLoading, blogList } = useFetchById(blogId);

  return (
    <>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white  w-1/2">
          <img
            className="rounded-t-lg"
            src={blogList?.imageURL || defaultImg}
            alt=""
            style={{ width: "700px", height: "300px" }}
          />
          <div className="bg-gray-500">
            <h5 className="text-gray-900 text-xl font-medium py-3 text-start pl-10">
              {blogList?.title}
            </h5>
            <h3 className="text-start pl-10 mb-3">{blogList?.date}</h3>
            <p className="text-gray-900 text-base mb-3 text-start pl-10">
              {blogList?.content}
            </p>
          </div>

          <div className="p-6">
            <p className="text-gray-700 text-base mb-4 text-3xl text-red">
              {blogList?.author}
            </p>
            {userContext?.email === blogList?.author && (
              <div className="flex justify-evenly my-8">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => navigate("/updateblog", { state: blogId })}>
                  Update
                </button>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => deleteBlog(blogId, navigate)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
