import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async (category) => {
    const gifs = await getData(category);
    setGifs(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs(category);
  }, []);

  return {
    gifs,
    isLoading,
  };
};
