export const MovieCard = ({ movie, toggleSelect }) => {
  const { Poster, Title, Year } = movie;

  return (
    <button className="movie-card" aria-label="add movie" onClick={(e) =>toggleSelect(e,movie)} >
      <div className="movie-card__head">
        <h2 className="movie-card__title">{`${Title} (${Year})`}</h2>
        <img className="movie-card__icon" src="add.svg" alt="add icon"></img>
        </div>
        <img className="movie-card__poster" src={Poster} alt={Title} />
    </button>
  );
};
