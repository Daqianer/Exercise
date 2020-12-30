import React, { Component } from "react";
class Heart extends Component {
  state = {};
  getLikeClassName = () => {
    const className = "fa fa-heart";
    if (this.props.movie.like) {
      return className;
    } else {
      return className + "-o";
    }
  };
  render() {
    return (
      <i
        className={this.getLikeClassName()}
        aria-hidden="true"
        onClick={this.props.onLike}
      ></i>
    );
  }
}

export default Heart;
