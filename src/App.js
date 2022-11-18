import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import Header from "./partials/_header";

// const FEATURED_API = "https://naruto-api.herokuapp.com/api/v1/characters";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=50663d733568df292cc22a4b4c473ec0&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <>
      <Header />
      <div id="main">
        <div className="filter-buttons">
          <Filter
            popular={popular}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        </div>
        <div className="popular-movies">
          {filtered?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
