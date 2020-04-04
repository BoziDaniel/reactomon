import { useState, useEffect } from "react";
import axios from "axios";
const useHttp = (url, dependencies) => {
  const [data, setData] = useState(" ");

  useEffect(() => {
    console.log("fetching data");
    axios.get(url).then((res) => {
      setData(res.data.results);
    });
  }, dependencies);
};
export default useHttp;
