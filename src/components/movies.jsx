import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Heart from "./heart";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import List from "./list";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (item) => {
    console.log(item);
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const { length: count } = filteredMovies;

    if (count === 0) return <p>There are no movies in the database</p>;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <List
              genres={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <h1>Showing {count} movies in the database</h1>
            {movies.length !== 0 && (
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
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onChangePage={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
