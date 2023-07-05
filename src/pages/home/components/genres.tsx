import React, { Component } from "react";
import { getGenres, getMovies } from "services/fake";
import { IEntity } from "types";
import Movies from "./movies";

interface GenreState {
  genres: IEntity.Genre[];
  movies: IEntity.Movie[];
  isLoading: boolean;
  currentGenre: string;
}

export default class Genres extends Component<{}, GenreState> {
  state: GenreState = {
    genres: [],
    movies: [],
    isLoading: true,
    currentGenre: "All",
  };

  async componentDidMount() {
    const genres = await getGenres();
    const movies = await getMovies();
    this.setState({ genres, movies, isLoading: false });
  }

  changeCurrentGenre = (genre: string) => {
    this.setState({ currentGenre: genre });
  };

  render() {
    const { genres, movies, isLoading, currentGenre } = this.state;
    const currentMovies =
      currentGenre === "All" ? [...movies] : [...movies].filter((item) => item.genre.name === currentGenre);
    return isLoading ? (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    ) : (
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            <li
              className={currentGenre === "All" ? "list-group-item active" : "list-group-item"}
              onClick={() => this.changeCurrentGenre("All")}
            >
              All Genres
            </li>
            {genres.map((item) => (
              <li
                key={item._id}
                className={item.name === currentGenre ? "list-group-item active" : "list-group-item"}
                onClick={() => this.changeCurrentGenre(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <Movies movies={currentMovies} genre={currentGenre} />
        </div>
      </div>
    );
  }
}
