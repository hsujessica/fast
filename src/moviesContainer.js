import { MovieCard } from "./movieCard";

export const MoviesContainer = ({ results, toggleSelect }) => {
  return (
    <div className="movies-container">
      <div className="movies-container__results">
        {results && results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} toggleSelect={toggleSelect} />
        ))}
      </div>
    </div>
  );
};
