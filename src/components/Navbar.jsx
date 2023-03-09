import React from "react";
import { Characters } from "../pages/Characters";
import { Comics } from "../pages/Comics";
import { Series } from "../pages/Series";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSetCategoryContext } from "../contexts/MarvelDataProvider";

export const Navbar = () => {
  const setCategory = useSetCategoryContext();

  return (
    <Router>
      <div className="navContainer">
        <Link
          to="/"
          className="navLogo"
          onClick={() => setCategory("characters")}
        >
          MARVEL - APP
        </Link>
        <Link
          to="/personajes"
          className="navLink"
          onClick={() => setCategory("characters")}
        >
          PERSONAJES
        </Link>
        <Link
          to="/comics"
          className="navLink"
          onClick={() => setCategory("comics")}
        >
          COMICS
        </Link>
        <Link
          to="/series"
          className="navLink"
          onClick={() => setCategory("series")}
        >
          SERIES
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/personajes" replace />} />
        <Route path="/personajes" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
};
