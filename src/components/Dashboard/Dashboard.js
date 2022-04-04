import React from "react";
import useChartData from "../../utility/useChartData";

const Dashboard = () => {
  const [charts, setCharts] = useChartData();
  console.log(charts);
  return <div></div>;
};

export default Dashboard;
