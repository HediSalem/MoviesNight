import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
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
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            flexGrow: 1,
            color: "inherit",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
