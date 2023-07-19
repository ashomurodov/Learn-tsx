import { iEntity } from "types";
import MoviesTable from "./movies-table";

interface MoviesProps {
  movies: iEntity.Movies[];
  onChangeSearch: (search: string) => void;
  user: iEntity.User;
}

const Movies = ({ movies, onChangeSearch, user }: MoviesProps) => (
  <div className="d-flex flex-column align-items-start">
    {user ? <button className="btn btn-primary">New Movie</button> : ""}

    <p className=" my-3">Showing {movies.length} movies in the database</p>
    <input
      onChange={(e) => onChangeSearch(e.target.value)}
      type="text"
      placeholder="search movies..."
      className="form-control mb-2"
    />
    <MoviesTable movies={movies} />
  </div>
);

export default Movies;
