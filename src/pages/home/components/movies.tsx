import { IEntity } from "types";
import MoviesTable from "./movies-table";
import Pagination from "./pagination";

interface MoviesProps {
  movies: IEntity.Movie[];
  search: string;
  onChangeSearch: (search: string) => void;
  isLogined: boolean;
}

const Movies = ({ onChangeSearch, search, movies, isLogined }: MoviesProps) => (
  <div>
    {isLogined ? <button className="btn btn-primary mb-4">New Movie</button> : ""}
    <p>Showing {movies.length} movies in the database.</p>
    <input
      value={search}
      type="text"
      placeholder="Search...."
      className="form-control my-3"
      onChange={(e) => onChangeSearch(e.target.value)}
    />
    <MoviesTable movies={movies} />
  </div>
);

export default Movies;
