import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/results/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
