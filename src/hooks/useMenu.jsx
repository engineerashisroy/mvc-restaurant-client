import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        // const popularItem = data.filter((item) => item.category === "popular");
        setMenu(data), setLoading(false);
        // console.log(data);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
