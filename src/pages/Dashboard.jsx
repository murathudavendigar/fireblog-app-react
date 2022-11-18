import "../index.css";
import { useFetch } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";
import { Link } from "react-router-dom";
import loadingImg from "../assets/loadingImg.gif";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  // console.log(blogList);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <img src={loadingImg} alt="loading img" />
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {blogList?.map((item, index) => {
            return (
              <div className="flex justify-center mx-auto" key={index}>
                <div className="rounded-lg shadow-lg bg-white/50 max-w-sm overflow-hidden">
                  <Link
                    to="/details"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    state={{ data: item.id }}>
                    <img
                      className="rounded-t-lg"
                      src={item?.imageURL || defaultImg}
                      alt=""
                      style={{ width: "800px", height: "160px" }}
                    />
                    <div className="bg-gray-500 h-40 ">
                      <h5 className="text-gray-900 text-xl font-medium py-3 text-start pl-10 border-b-2 border-stone-300">
                        {item?.title}
                      </h5>
                      <h3 className="text-start pl-10 mb-3 pt-2">
                        {item?.date}
                      </h3>
                      <p className="text-gray-900 text-base mb-3 text-start pl-10 dashboard-content break-words mr-3">
                        {item?.content}
                      </p>
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-gray-700 text-base mb-4 border-t-4 pt-2">
                      {item?.author}
                    </p>
                    <Link to="/details">
                      <button
                        type="button"
                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Add Comment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
