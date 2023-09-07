import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useParams } from "react-router-dom";
import { searchActor, searchMovie } from "./api/moviesAPI";
import MoviePosters from "./components/MoviePosters";
function SearchResults() {
  const { query } = useParams();
  const [movieQueryResults, setMovieQueryResults] = useState([]);
  const [actorsQueryResults, setActorsQueryResults] = useState([]);
  useEffect(() => {
    searchMovie(query)
      .then((data) => {
        setMovieQueryResults(data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
    searchActor(query)
      .then((data) => {
        setActorsQueryResults(data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
  }, [query]);
  const movies = movieQueryResults?.results?.map((member) => (
    <MoviePosters member={member} />
  ));

  const actors = actorsQueryResults?.results?.flatMap((result) =>
    result?.known_for.map((member) => <MoviePosters member={member} />)
  );
  const searchCount =
    movieQueryResults.total_results + actorsQueryResults.total_results;
  return (
    <>
      <Header />
      <div style={{ marginLeft: "5%" }}>
        <h1 style={{ fontFamily: "fantasy" }}>{query}</h1>
        <h2>{searchCount}</h2>
        <div className="row">{movies}</div>
        <div className="row">{actors}</div>
      </div>
    </>
  );
}

export default SearchResults;
