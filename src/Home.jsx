import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "./components/Header";
import {
  thisWeeksMovies,
  topRatedMovies,
  upcomingMovies,
} from "./api/moviesAPI";
import NewMovies from "./components/NewMovies";
import ImageCarousel from "./components/ImageCarousel";
import { useNavigate } from "react-router-dom";

function Home() {
  const [WeeksMovies, setWeeksMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    thisWeeksMovies()
      .then((data) => {
        setWeeksMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    topRatedMovies()
      .then((data) => {
        setTopMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    upcomingMovies()
      .then((data) => {
        setUpcoming(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const navigateToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <div className="space">
        <div className="component-spacing">
          <Header />
        </div>
        <div className="component-spacing">
          <NewMovies movies={upcoming} />
        </div>
        <div className="component-spacing">
          <ImageCarousel
            movies={WeeksMovies}
            id={"carousel1"}
            title={"A l'affichage cette semaine"}
            clickedElement={navigateToDetails}
            useRate={false}
          />
        </div>
        <div className="component-spacing">
          <ImageCarousel
            movies={topMovies}
            id={"carousel2"}
            title={"Les films les mieux notés"}
            clickedElement={navigateToDetails}
            useRate={true}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
