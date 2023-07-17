import { iEntity } from "types";

interface GenresProps {
  genres: iEntity.Genres[];
  currentGenreID: string;
  onSelectGenre: (genreId: string) => void;
}

const Genres = ({ genres, currentGenreID, onSelectGenre }: GenresProps) => (
  <ul className="list-group">
    {genres.map((genre) => (
      <li
        key={genre._id}
        className={`list-group-item ${genre._id === currentGenreID ? "active" : ""}`}
        onClick={() => onSelectGenre(genre._id)}
      >
        {genre.name}
      </li>
    ))}
  </ul>
);

export default Genres;
