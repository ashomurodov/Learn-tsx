import { Component } from "react";
import { Genres, Movies } from "components";
import Loader from "components/loader";
import { Genre, Movie, http } from "services";
import { iEntity } from "types";
import Pagination from "components/pagination";

interface HomeState {
  movies: iEntity.Movies[];
  genres: iEntity.Genres[];
  isLoading: boolean;
  currentGenreID: string;
  search: string;
  pageSize: number;
  currentPage: number;
}

export default class Home extends Component<{}, HomeState> {
  state: HomeState = {
    movies: [],
    genres: [],
    isLoading: true,
    currentGenreID: "all",
    search: "",
    pageSize: 3,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: movies } = await Movie.List();
    const { data: genres } = await Genre.List();
    this.setState({ movies, genres: [{ _id: "all", name: "All" }, ...genres], isLoading: false }, () => {
      console.log(this.state);
    });
  }

  handleSelectGenre = (currentGenreID: string) => {
    this.setState({ currentGenreID, currentPage: 1 });
  };

  handleChangeSearch = (search: string) => {
    this.setState({ search });
  };

  handleChangeCurrentPage = (currentPage: number) => {
    this.setState({ currentPage });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) return <Loader />;

    const { genres, movies, currentGenreID, search, pageSize, currentPage } = this.state;

    const currentGenreMovies = currentGenreID === "all" ? movies : movies.filter((movie) => movie.genre._id === currentGenreID);

    const searchedMovies = currentGenreMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

    const paginate = (movies: iEntity.Movies[], pageSize: number, currentPage: number) => {
      const startIdx = pageSize * (currentPage - 1);
      const lastIdx = startIdx + pageSize;

      return movies.slice(startIdx, lastIdx);
    };

    const paginatedMovies = paginate(searchedMovies, pageSize, currentPage);

    return (
      <div className="row">
        <div className="col-2">
          <Genres onSelectGenre={this.handleSelectGenre} currentGenreID={currentGenreID} genres={genres} />
        </div>
        <div className="col">
          <Movies onChangeSearch={this.handleChangeSearch} movies={paginatedMovies} />
          {searchedMovies.length > pageSize ? (
            <Pagination
              onChangeCurrentPagee={this.handleChangeCurrentPage}
              pageSize={pageSize}
              currentPage={currentPage}
              moviesLength={searchedMovies.length}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
