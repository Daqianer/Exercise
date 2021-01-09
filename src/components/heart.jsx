import React from "react";

const Heart = ({ movie, onLike }) => {
  let classes = "fa fa-heart";
  if (!movie.like) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={() => onLike(movie)}
    ></i>
  );
};

export default Heart;
