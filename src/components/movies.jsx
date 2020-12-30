import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Heart from "./heart";
import Pagination from "./pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovies = (movieId) => {
    // console.log(movieId);
    // deleteMovie(movieId);
    // this.setState({ movies: getMovies() });
    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies: movies });
  };

  handleLikeMovies = (movie) => {
    console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  render() {
    return (
      <div style={{ width: "auto" }}>
        <h1>Showing {this.state.movies.length} movies in the database</h1>
        {this.state.movies.length !== 0 && (
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
              {this.state.movies.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.genre.name}</td>
                    <td>{item.numberInStock}</td>
                    <td>{item.dailyRentalRate}</td>
                    <td>
                      <Heart
                        movie={item}
                        onLike={() => this.handleLikeMovies(item)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDeleteMovies(item._id)}
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination />
      </div>
    );
  }
}

export default Movies;
