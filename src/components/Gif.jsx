export const Gif = ({ title, url }) => {
  return (
    <div className="card mb-4">
      <img src={url} alt={title} className="card-img-top" />
      {title === "" || title === null || title === " " ? (
        <h5 className="card-text p-3 text-center">Title is not available...</h5>
      ) : (
        <h5 className="card-text p-3 text-center">{title}</h5>
      )}
    </div>
  );
};
