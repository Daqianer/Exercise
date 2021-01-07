import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    console.log(path);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((item) => (
            <th
              key={item.path || item.key}
              onClick={() => this.raiseSort(item.path)}
            >
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
