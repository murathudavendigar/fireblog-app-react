import React from "react";
import { useFetch } from "../utils/functions";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();

  return (
    <div>
      {blogList?.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
