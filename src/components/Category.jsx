import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gif } from "./Gif";
import { Loader } from "./Loader";

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
