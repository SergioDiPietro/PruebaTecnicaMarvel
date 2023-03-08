import React from "react";
import { Navbar } from "./components/Navbar";
import { MarvelDataProvider } from "./contexts/MarvelDataProvider";

export function App() {
  return (
    <MarvelDataProvider>
      <Navbar />
    </MarvelDataProvider>
  );
}
