import { iEntity } from "types";

interface MoviesTableProps {
  movies: iEntity.Movies[];
}

const MoviesTable = ({ movies }: MoviesTableProps) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Owner</th>
        <th>Rate</th>
        <th>Stock</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.username}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>{movie.numberInStock}</td>
          <td>Like</td>
          <td>
            <button className="btn btn-danger">delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MoviesTable;
