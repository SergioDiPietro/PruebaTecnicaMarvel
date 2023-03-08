import React from "react";
import { Characters } from "../pages/Characters";
import { Comics } from "../pages/Comics";
import { Series } from "../pages/Series";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <div className="navContainer">
        <Link to="/" className="navLogo">
          MARVEL - APP
        </Link>
        <Link to="/personajes" className="navLink">
          PERSONAJES
        </Link>
        <Link to="/comics" className="navLink">
          COMICS
        </Link>
        <Link to="/series" className="navLink">
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
