import React from "react";

const List = (props) => {
  const { genres, onChangeGenres } = props;
  return (
    <ul className="list-group">
      <li
        className="list-group-item active"
        style={{ cursor: "pointer" }}
        onClick={() => onChangeGenres(null)}
      >
        All genres
      </li>
      {genres.map((genre) => (
        <li
          className="list-group-item"
          key={genre._id}
          style={{ cursor: "pointer" }}
          onClick={() => onChangeGenres(genre._id)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
