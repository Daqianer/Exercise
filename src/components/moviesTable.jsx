import React, { Component } from "react";
import Heart from "./heart";
import TableHeader from "./comment/tableHeader";
import TableBody from "./comment/tableBody";
class moviesTable extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, this.props);
    // console.log(prevState, this.state);
    if (!this.props.movies.length) {
      //判断当前页数目是否为0，为0则前往上一页
      this.props.onChangePage(this.props.currentPage - 1);
    }
  }

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      { key: "like" },
      { key: "delete" },
    ];
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} />
      </table>
    );
  }
}

export default moviesTable;
