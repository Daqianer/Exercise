import React, { Component } from "react";
import Heart from "./heart";
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
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.genre.name}</td>
                <td>{item.numberInStock}</td>
                <td>{item.dailyRentalRate}</td>
                <td>
                  <Heart movie={item} onLike={onLike} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default moviesTable;
