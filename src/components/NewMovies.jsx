import React from "react";
import "./NewMovies.css";
function NewMovies({ movies }) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide col-md-12">
      <div className="carousel-indicators">
        {movies.map((movie, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="backgroun-img"
              style={{
                background: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}') center/cover `,
              }}
            ></div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="auto"
              height="400px"
              className={`d-block w-100 newMovieImg`}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewMovies;
