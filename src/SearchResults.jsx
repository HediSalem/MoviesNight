import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useParams } from "react-router-dom";
import { searchMovie } from "./api/moviesAPI";
import MoviePosters from "./components/MoviePosters";
function SearchResults() {
  const { query } = useParams();
  const [queryResults, setQueryResults] = useState([]);
  useEffect(() => {
    searchMovie(query)
      .then((data) => {
        setQueryResults(data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
  }, [query]);
  const movies = queryResults?.results?.map((member) => (
    <MoviePosters member={member} />
  ));
  return (
    <>
      <Header />
      <div style={{ marginLeft: "5%" }}>
        <h1 style={{ fontFamily: "fantasy" }}>{query}</h1>
        <h2>{queryResults.total_results}</h2>
        <div className="row">{movies}</div>
      </div>
    </>
  );
}

export default SearchResults;
