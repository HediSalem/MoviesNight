import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { searchMovie, searchActor } from "../api/moviesAPI";
import { Button } from "@mui/material";
function Header() {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue.length >= 1) {
      fetchSuggestions(inputValue);
      setShowDropDown(true);
    } else {
      setSuggestions([]);
      setShowDropDown(false);
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      const moviesData = await searchMovie(query);
      const movieTitles = moviesData.results
        .slice(0, 5)
        .map((movie) => movie.title);
      const actorsData = await searchActor(query);

      const actors = actorsData?.results
        .slice(0, 2)
        .flatMap((result) => result.known_for?.map((item) => item?.name))
        .filter((name) => name !== undefined);

      const combinedArray = movieTitles.concat(actors);
      setSuggestions(combinedArray);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="frame-2">
      <div className="frame-5">
        <p
          style={{ cursor: "pointer" }}
          className="text-1"
          onClick={() => {
            navigate("/");
          }}
        >
          MOVIENIGHT
        </p>
      </div>
      <div className="searchinput">
        <SearchIcon color="inherit" className="search-icon" />
        <input
          placeholder="Rechercher un film, un réalisateur, un acteur"
          onChange={handleInputChange}
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            flexGrow: 1,
            color: "inherit",
          }}
        />
        {showDropDown && (
          <div className="dropdown">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
            <Button
              color="inherit"
              onClick={() => {
                navigate(`/results/${query}`);
              }}
            >
              Show all results
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
