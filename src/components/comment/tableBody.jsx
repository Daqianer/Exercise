import React, { Component } from "react";
import Heart from "../heart";

class TableBody extends Component {
  render() {
    const { data: movies, columns } = this.props;
    return (
      <tbody>
        {movies.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td></td>
            ))}
            {/*<td>{item.title}</td>*/}
            {/*<td>{item.genre.name}</td>*/}
            {/*<td>{item.numberInStock}</td>*/}
            {/*<td>{item.dailyRentalRate}</td>*/}
            {/*<td>*/}
            {/*  <Heart movie={item} onLike={onLike} />*/}
            {/*</td>*/}
            {/*<td>*/}
            {/*  <button*/}
            {/*    onClick={() => onDelete(item._id)}*/}
            {/*    className="btn btn-danger"*/}
            {/*  >*/}
            {/*    Delete*/}
            {/*  </button>*/}
            {/*</td>*/}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
