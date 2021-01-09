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
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((item) => (
            <th
              className="clickable"
              key={item.path || item.key}
              onClick={() => this.raiseSort(item.path)}
            >
              {item.label}
              {this.renderSortIcon(item)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
