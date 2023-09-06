import { Button } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function MovieDescription(props) {
  const { details, screenWriter, directorName } = props;

  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  }
  return (
    <div className="text-section">
      <h1>{details.title}</h1>
      <p>
        {details?.genres?.map((genre, index) => (
          <span key={genre.id} style={{ fontSize: 11 }}>
            {genre.name}
            {index < details.genres.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <div className="progress-container">
        <p
          style={{
            fontSize: 12,
            marginBottom: "1%",
            paddingRight: "3%",
          }}
        >
          {convertMinutesToHoursAndMinutes(details.runtime)}
        </p>
        <div
          className="progress bg-dark"
          role="progressbar"
          aria-label="Segment three"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: 6, width: "15%" }}
        >
          <div
            className="progress-bar bg-success"
            style={{ width: details.vote_average * 8 }}
          ></div>
        </div>
        <p
          style={{
            fontSize: 10,
            color: "gray",
            marginBottom: "1%",
            paddingLeft: "2%",
          }}
        >
          {(details.vote_average * 10).toFixed(1)}%
        </p>
      </div>
      <button type="button" className="btn btn-outline-light">
        Regarder
      </button>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<StarBorderIcon />}
        style={{ marginLeft: "2%" }}
      ></Button>
      <p style={{ marginTop: "2%" }}>Sypnosis</p>
      <p>{details.overview}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Screenplay, Story</p>
        <p style={{ marginRight: "15%" }}>Director</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{screenWriter} </p>
        <p>{directorName} </p>
      </div>
    </div>
  );
}

export default MovieDescription;
