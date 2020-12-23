import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components /MovieList";
import Filter from "./components /Filter";
import Title from "./components /Title";
import DescPage from "./components /DescPage";
function App() {
  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      title: "INTERSTELLAR",
      posterUrl:
        "https://i.pinimg.com/236x/08/fd/a9/08fda99b77a076bfe23905e146cdfb62.jpg",
      description: `The film chronicles the adventures of a group of explorers who use a 
    recently discovered rift in space-time to push human limits and set off to conquer 
    astronomical distances on an interstellar journey.`,
      rate: "4",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },
    {
      id: Math.random(),
      title: "THE DEPARTED",
      posterUrl:
        "https://i.pinimg.com/236x/3a/9d/99/3a9d99f7cb37f26d6edcd927bba26f64.jpg",
      description: `An undercover cop and a mole in the police attempt to identify 
    each other while infiltrating an Irish gang in South Boston.`,
      rate: "3",
      trailer: "https://www.youtube.com/watch?v=iQpb1LoeVUc",
    },
    {
      id: Math.random(),
      title: "GAME OF THRONES ",
      posterUrl:
        "https://i.pinimg.com/564x/53/8c/56/538c56de7726c6109640f410e55b2a30.jpg",
      description: `Game of Thrones is an HBO series that tells the story of a medieval country's civil war.`,
      rate: "5",
      trailer: "https://www.youtube.com/watch?v=rlR4PJn8b8I",
    },
  ]);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  const addMovie = (newMovie) => {
    setMovie(movie.concat(newMovie));
  };
  const addStar = () => {};
  const onSearch = (word) => {
    setSearch(word);
  };
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" />
        <Route
          path="/movie/:id"
          render={(props) => <DescPage {...props} movie={movie} />}
        />
        <div className="app">
          <Title />
          <Filter
            title={onSearch}
            addStar={addStar}
            rate={rate}
            setRate={setRate}
          />
          <MovieList
            movielist={movie.filter(
              (movie) =>
                movie.rate >= rate &&
                movie.title.toLowerCase().includes(search.toLowerCase().trim())
            )}
            handleAdd={addMovie}
            movie={movie}
          />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
