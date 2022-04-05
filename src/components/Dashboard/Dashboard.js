import React from "react";
import CustomBarChart from "../CustomBarChart/CustomBarChart";
import CustomLineChart from "../CustomLineChart/CustomLineChart";

const Dashboard = () => {
  return (
    <div className="mx-10 my-10">
      <div className="bar-chart">
        <CustomBarChart></CustomBarChart>
      </div>
      <div className="line-chart mt-10">
        <CustomLineChart></CustomLineChart>
      </div>
    </div>
  );
};

export default Dashboard;
