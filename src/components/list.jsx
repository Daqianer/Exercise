import React from "react";

const List = (props) => {
  const {
    genres,
    onGenreSelect,
    textProperty,
    valueProperty,
    selectedGenre,
  } = props;
  return (
    <ul className="list-group">
      {genres.map((item) => (
        <li
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[textProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onGenreSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default List;
