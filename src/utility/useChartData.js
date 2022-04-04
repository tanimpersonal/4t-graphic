import { useEffect, useState } from "react";

const useChartData = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("https://json.extendsclass.com/bin/d99a5042d4c5")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return [charts, setCharts];
};
export default useChartData;
