import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchById } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";

const Details = () => {
  const location = useLocation();
  const blogId = location.state?.data;

  const { isLoading, blogList } = useFetchById(blogId);

  return (
    <>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white  w-9/12">
          <img
            className="rounded-t-lg"
            src={blogList?.imageURL || defaultImg}
            alt=""
            style={{ width: "800px", height: "160px" }}
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
            <p className="text-gray-700 text-base mb-4">{blogList?.author} </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
