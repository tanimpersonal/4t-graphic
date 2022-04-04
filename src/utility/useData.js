import { useEffect, useState } from "react";
const useData = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://json.extendsclass.com/bin/21451950d749")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};
export default useData;
