import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import "./MovieDetails.css";
import {
  getMovieById,
  getMovieCreditsById,
  getVideosById,
} from "../api/moviesAPI";
import { Button } from "@mui/material";

import YouTube from "react-youtube";
import user from "../assets/user-xxl.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CastImage from "./CastImage";
import MovieDescription from "./MovieDescription";
function MovieDetails() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [videos, setVideos] = useState({});

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });

    getMovieCreditsById(id)
      .then((data) => {
        setCredits(data);
      })
      .catch((error) => {
        console.error("Error fetching credits:", error);
      });
    getVideosById(id)
      .then((data) => {
        setVideos(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const cast = credits?.cast;

  const castImages = cast
    ?.slice(0, 10)
    .map((member) => <CastImage member={member} user={user} />);

  const director = credits?.crew?.find(
    (crewMember) => crewMember.job === "Director"
  );
  const directorName = director ? director.name : "Director not found";
  const screenplay = credits?.crew?.find(
    (crewMember) => crewMember.job === "Screenplay"
  );
  const screenWriter = screenplay ? screenplay.name : "Screen writer not found";

  const trailer = videos?.results?.filter((video) => video.type === "Trailer");
  const opts = {
    height: "150",
    width: "250",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container space">
          <div className="row">
            <div
              className="backgroun-img"
              style={{
                background: `url('https://image.tmdb.org/t/p/w500${details.poster_path}') center/cover `,
              }}
            ></div>
            <div className="col-md-6" style={{ width: "30%" }}>
              <MovieDescription
                details={details}
                screenWriter={screenWriter}
                directorName={directorName}
              />
            </div>
            <div className="col-md-6" style={{ paddingLeft: "10%" }}>
              <div className="image-section">
                <img
                  src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                  alt={details.title}
                  style={{ maxHeight: "400px", maxWidth: "100%" }}
                />
              </div>
            </div>
            <p style={{ marginTop: "5%" }}>Bandes annonces</p>
            <div style={{ display: "flex" }}>
              {trailer?.map((trailerVideo) => (
                <YouTube
                  key={trailerVideo.id}
                  videoId={trailerVideo.key}
                  opts={opts}
                  style={{ marginRight: "1%" }}
                />
              ))}
            </div>
            <p style={{ marginTop: "5%" }}>Casting</p>
            <div className="row">
              {castImages}
              <Button
                className="col-md-1"
                variant="variant"
                endIcon={<ArrowForwardIcon />}
              >
                Voir tout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
