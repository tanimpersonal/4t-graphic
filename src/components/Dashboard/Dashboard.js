import React from "react";
import CustomBarChart from "../CustomBarChart/CustomBarChart";
import CustomLineChart from "../CustomLineChart/CustomLineChart";

const Dashboard = () => {
  return (
    <div className="mx-10 my-10">
      <div className="bar-chart border py-2">
        <CustomBarChart></CustomBarChart>
      </div>
      <div className="line-chart mt-10 border py-2">
        <CustomLineChart></CustomLineChart>
      </div>
    </div>
  );
};

export default Dashboard;
