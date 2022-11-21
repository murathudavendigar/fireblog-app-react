import "../index.css";
import { useFetch } from "../utils/functions";
import defaultImg from "../assets/default-img.gif";
import { Link } from "react-router-dom";
import loadingImg from "../assets/loadingImg.gif";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  // console.log(blogList);
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  let randomNumber;
  console.log(blogList);
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <img src={loadingImg} alt="loading img" />
        </div>
      ) : (
        <>
          <h2 className="mb-10 dashboard-text"> CP BLOG </h2>
          <div className="flex flex-wrap gap-6 justify-center mb-20">
            {blogList?.map((item, index) => {
              return (
                <div
                  className="flex justify-center mx-auto  rounded-t-lg rounded-b-lg"
                  key={index}>
                  <div className="rounded-lg shadow-lg bg-white/50 max-w-sm overflow-hidden">
                    <h1 className="hidden">
                      {(randomNumber = Math.floor(Math.random() * 50))}
                    </h1>

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
                      <div
                        className=" h-40 "
                        style={{
                          backgroundColor: `${colorArray[randomNumber]}`,
                        }}>
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
                      <h4 className="text-black text-xl flex  ml-3">
                        <span className="mr-4">
                          <img
                            src={item?.photoAuthor}
                            alt=""
                            className="rounded-full"
                            style={{ height: 30, width: 30 }}
                          />
                        </span>
                        {item?.fullName}
                      </h4>
                      <p className="text-gray-700 text-base mb-4 border-t-4 pt-2">
                        {item?.author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
