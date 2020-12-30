import React from "react";

const Heart = (props) => {
  let classes = "fa fa-heart";
  if (!props.movie.like) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onLike}
    ></i>
  );
};

export default Heart;
