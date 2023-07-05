import { count } from "console";
import React, { Component } from "react";
import { getMovies } from "services/fake";
import { IEntity } from "types";
interface MoviesState {
  isLoading: boolean;
  searchValue: string;
  isSortable: boolean;
  moviesByPage: any;
  currentPage: number;
  currentMovies: any[];
  currentGenre: string;
}

interface MoviesProps {
  movies: IEntity.Movie[];
  genre: string;
}

export default class Movies extends Component<MoviesProps, MoviesState> {
  state: MoviesState = {
    isLoading: true,
    isSortable: false,
    searchValue: "",
    moviesByPage: {},
    currentPage: 1,
    currentMovies: [],
    currentGenre: "",
  };

  async componentDidMount() {
    await this.createMoviesByPage(this.props.movies);
    const { currentPage, moviesByPage } = this.state;
    const { genre } = this.props;
    const currentMovies = moviesByPage[currentPage];
    this.setState({ isLoading: false, currentMovies, currentGenre: genre });
  }

  createMoviesByPage(movies: any) {
    const moviesByPage: any = {};
    let currentPage = 1;
    let counter = 0;

    for (let i = 0; i <= Math.floor(movies.length / 10); i++) {
      let moviesArr: any = [];
      for (let j = 0; j < movies.length; j++) {
        if (j !== 10 && movies[counter]) {
          moviesArr.push(movies[counter]);
          counter++;
        } else break;
      }
      moviesByPage[currentPage] = moviesArr;
      currentPage++;
    }

    this.setState({ moviesByPage });
  }

  changeCurrentPage = (page: number) => {
    const { moviesByPage } = this.state;
    this.setState({ currentPage: page, currentMovies: moviesByPage[page] });
  };

  render() {
    const { currentMovies, currentPage, moviesByPage, isLoading, searchValue, isSortable } = this.state;
    const arrayOfMovies = [];
    for (const key in moviesByPage) {
      if (Object.prototype.hasOwnProperty.call(moviesByPage, key)) {
        arrayOfMovies.push(moviesByPage[key]);
      }
    }
    let searchedMovieList = searchValue.length
      ? [...currentMovies].filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      : currentMovies;

    if (isSortable) {
      searchedMovieList = searchedMovieList.sort((a, b) => a.title.localeCompare(b.title));
    }

    return isLoading ? (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    ) : (
      <>
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
        />
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th
                onClick={() => {
                  const sortable = !isSortable;
                  this.setState({ isSortable: sortable });
                }}
              >
                Title
              </th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {searchedMovieList.length ? (
              searchedMovieList.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.genre.name}</td>
                  <td>{item.numberInStock}</td>
                  <td>{item.dailyRentalRate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={5}>Not Found</th>
              </tr>
            )}
          </tbody>
        </table>
        {arrayOfMovies.length > 1 && (
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              {arrayOfMovies.map((movie, idx) => (
                <li
                  key={idx}
                  className={currentPage === idx + 1 ? "page-item active" : "page-item"}
                  aria-current="page"
                  onClick={() => this.changeCurrentPage(idx + 1)}
                >
                  <span className="page-link">{idx + 1}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </>
    );
  }
}
