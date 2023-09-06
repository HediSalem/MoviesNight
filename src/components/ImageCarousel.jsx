import React from "react";
import "./ImageCarousel.css";
import SingleCarousel from "./SingleCarousel";

function ImageCarousel({ movies, id, title, clickedElement, useRate }) {
  const itemsPerSlide = 6;

  const movieGroups = [];
  for (let i = 1; i < movies.length; i += itemsPerSlide) {
    movieGroups.push(movies.slice(i, i + itemsPerSlide));
  }

  const handleClickedElement = (id) => {
    clickedElement(id);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <div id={id} className="carousel slide carousel slide col-md-10">
            <h4 className="title1">{title} </h4>
            <div className="carousel-inner">
              {movieGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`carousel-item ${
                    groupIndex === 0 ? "active" : ""
                  }`}
                >
                  <div className="row">
                    {group.map((movie, index) => (
                      <SingleCarousel
                        index={index}
                        handleClickedElement={handleClickedElement}
                        movie={movie}
                        useRate={useRate}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1">
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
