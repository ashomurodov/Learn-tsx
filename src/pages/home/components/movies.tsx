import React, { Component } from "react";
import { getMovies } from "services/fake";
import { IEntity } from "types";
interface MoviesState {
  movies: IEntity.Movie[];
  isLoading: boolean;
  searchValue: string;
  isSortable: boolean;
}

interface MoviesProps {
  currentGenre: string;
}

export default class Movies extends Component<MoviesProps, MoviesState> {
  state: MoviesState = {
    movies: [],
    isLoading: true,
    searchValue: "",
    isSortable: false,
  };

  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies, isLoading: false });
  }
  render() {
    const { movies, isLoading, searchValue, isSortable } = this.state;
    const { currentGenre } = this.props;
    const currentMoviesList =
      currentGenre === "All" ? [...movies] : [...movies].filter((item) => item.genre.name === currentGenre);
    let searchedMovieList =
      searchValue.length > 0
        ? [...currentMoviesList].filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        : currentMoviesList;

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
      </>
    );
  }
}
