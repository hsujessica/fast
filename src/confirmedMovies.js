export const ConfirmedMovies = ({selected}) => {

  const getSelected = () => {
    const movies = Object.values(selected)
    return movies.map(movie =>  <li className="confirmed-movies__movie-title" key={movie.imdbID}>{movie.Title}</li>);
  }

  return (
    <div className="confirmed-container">
    <div className="confirmed-movies">
        <h2 className="confirmed-movies__heading">Your confirmed selection</h2>
        <ul className="confirmed-movies__list">{getSelected()}</ul>
    </div>
    </div>
  );
};
