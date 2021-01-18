import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import Pagination from "./pagination";
import List from "./list";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }, //按照那一列进行如何排序
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDeleteMovies = (movieId) => {
    // console.log();
    // deleteMovie(movieId);
    // this.setState({ movies: getMovies() });
    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies });
  };

  handleLikeMovies = (movie) => {
    // console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (item) => {
    // console.log(item);
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedMovies = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const orderedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(orderedMovies, currentPage, pageSize);

    return { count: filteredMovies.length, movies };
  };

  render() {
    const { movies: allMovies, pageSize, currentPage, sortColumn } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database</p>;

    const { count, movies } = this.getPagedMovies();

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
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLikeMovies}
              onDelete={this.handleDeleteMovies}
              currentPage={currentPage}
              onChangePage={this.handlePageChange}
              onSort={this.handleSort}
            />
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
