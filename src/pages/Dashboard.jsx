import React from "react";
import { useFetch } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 justify-center">
        {blogList?.map((item, index) => {
          return (
            <div className="flex justify-center" key={index}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <Link
                  to="/details"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light">
                  <img
                    className="rounded-t-lg"
                    src={item?.imageURL || defaultImg}
                    alt=""
                    width="850px"
                    height="150px"
                  />
                  <div className="bg-gray-500">
                    <h5 className="text-gray-900 text-xl font-medium py-3 text-start pl-10">
                      {item?.title}
                    </h5>
                    <h3 className="text-start pl-10 mb-3">{item?.date}</h3>
                    <p className="text-gray-900 text-base mb-3 text-start pl-10">
                      {item?.content}
                    </p>
                  </div>
                </Link>
                <div className="p-6">
                  <p className="text-gray-700 text-base mb-4">
                    {item?.author}{" "}
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Button
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
