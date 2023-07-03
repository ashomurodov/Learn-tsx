import React, { Component } from "react";
import { getGenres } from "services/fake";
import { IEntity } from "types";
import Movies from "./movies";

interface GenreState {
  genres: IEntity.Genre[];
  isLoading: boolean;
  currentGenre: string;
}

export default class Genres extends Component<{}, GenreState> {
  state: GenreState = {
    genres: [],
    isLoading: true,
    currentGenre: "All",
  };

  async componentDidMount() {
    const genres = await getGenres();
    this.setState({ genres, isLoading: false });
  }

  changeCurrentGenre = (genre: string) => {
    this.setState({ currentGenre: genre });
  };

  render() {
    const { genres, isLoading, currentGenre } = this.state;
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
          <Movies currentGenre={currentGenre} />
        </div>
      </div>
    );
  }
}
