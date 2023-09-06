import React from "react";

function SingleCarousel(props) {
  const { index, handleClickedElement, movie, useRate } = props;
  return (
    <div
      key={index}
      onClick={() => {
        handleClickedElement(movie.id);
      }}
      className="col-md-2"
    >
      <div className="carousel-item-content" style={{ cursor: "pointer" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={`d-block w-100 `}
        />
        <h5 className="title">{movie.title}</h5>
        {useRate && (
          <div className="progress-container">
            <div
              className="progress bg-dark"
              role="progressbar"
              aria-label="Segment three"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: 6, width: "80%" }}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: movie.vote_average * 10 }}
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
              {(movie.vote_average * 10).toFixed(1)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleCarousel;
