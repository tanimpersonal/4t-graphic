import React from "react";
import CustomBarChart from "../CustomBarChart/CustomBarChart";
import CustomLineChart from "../CustomLineChart/CustomLineChart";

const Dashboard = () => {
  return (
    <div className="mx-10 my-10">
      <CustomBarChart></CustomBarChart>
      <CustomLineChart></CustomLineChart>
    </div>
  );
};

export default Dashboard;
