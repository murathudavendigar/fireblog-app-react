import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBlog, useFetchById } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";
import { useAuthContext } from "../context/AuthContext";
import loadingImg from "../assets/loadingImg.gif";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.state?.data;
  const { userContext } = useAuthContext();

  const { isLoading, blogList } = useFetchById(blogId);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <img src={loadingImg} alt="loading img" />
        </div>
      ) : (
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white/50  w-1/2">
            <img
              className="rounded-t-lg"
              src={blogList?.imageURL || defaultImg}
              alt=""
              style={{ width: "700px", height: "300px" }}
            />
            <div className="bg-gray-700 break-words">
              <h5 className="text-gray-100 text-4xl font-medium py-3 text-center pl-10">
                {blogList?.title}
              </h5>
              <h3 className="text-start text-gray-100 pl-10 mb-3">
                <em> {blogList?.date}</em>
              </h3>
              <p className="text-gray-100 text-base mb-3 pb-4 text-start pl-10 mr-4">
                {blogList?.content}
              </p>
            </div>

            <div className="p-6">
              <p className="text-gray-700 text-base mb-4 text-3xl text-red">
                {blogList?.author}
              </p>

              <div className="flex justify-evenly my-8">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => navigate("/")}>
                  Go Back
                </button>
                {userContext?.email === blogList?.author && (
                  <>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() =>
                        navigate("/updateblog", { state: blogId })
                      }>
                      Update
                    </button>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => deleteBlog(blogId, navigate)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
