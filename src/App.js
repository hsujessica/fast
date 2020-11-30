import { useState } from "react";
import { MoviesContainer } from "./moviesContainer";
import { ConfirmationButton } from "./confirmationButton";
import { ConfirmedMovies } from "./confirmedMovies";

import { API_KEY } from "./secrets";

let debouncer = -1;

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const toggleSelect = (e, movie) => {
    if (selected[movie.imdbID]) {
      setSelected({...selected, [movie.imdbID]: false});
      e.currentTarget.classList.remove('movie-card--selected');

    }
    else {
      setSelected({...selected, [movie.imdbID]: movie});
      e.currentTarget.classList.add('movie-card--selected');
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
      fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=${e.target.value}&type=movie`)
        .then((res) => {
          if (res.status !== 200) {
            console.log("Bad status:", res.status);
            return;
          }
          res.json().then((data) => {
            setResults(data.Search);
            console.log(data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
  };

  const step1 = (<><header className="search">
  <label className="search__label" for="searchbox">I'm looking for </label>
  <input autoFocus className="search__input" id="searchbox" value={query} onChange={handleChange}></input>
  </header>
  <MoviesContainer results={results} toggleSelect={toggleSelect} />
  {Object.entries(selected).length ? <ConfirmationButton selected={selected} setConfirmed={setConfirmed} /> : null}</>)

  const step2 = <ConfirmedMovies selected={selected} />

  return (
    <div className="app">
      {confirmed ? step2 : step1}
    </div>
  );
};

export default App;
