import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gif, Loader } from "./";

export const Category = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="mb-5">
        <h2>{category}</h2>
        <div id="container">
          {gifs.map((gif) => (
            <Gif key={gif.id} {...gif} />
          ))}
        </div>
      </div>
    );
  }
};
