import React, { useState, useContext } from "react";
import { getMarvelData } from "../services/services";

const charactersContext = React.createContext();
const comicsContext = React.createContext();
const seriesContext = React.createContext();
const setDataContext = React.createContext();
const categoryContext = React.createContext();

export function useCharactersContext() {
  return useContext(charactersContext);
}

export function useComicsContext() {
  return useContext(comicsContext);
}

export function useSeriesContext() {
  return useContext(seriesContext);
}

export function useSetDataContext() {
  return useContext(setDataContext);
}

export function useCategoryContext() {
  return useContext(categoryContext);
}

export function MarvelDataProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [category, setCategory] = useState("");

  async function setData(category) {
    switch (category) {
      case "characters":
        if (characters.length <= 0) {
          setCharacters(await getMarvelData(category));
        }
        setCategory("characters");
        break;
      case "comics":
        if (comics.length <= 0) {
          setComics(await getMarvelData(category));
        }
        setCategory("comics");
        break;
      case "series":
        if (series.length <= 0) {
          setSeries(await getMarvelData(category));
        }
        setCategory("series");
        break;
      default:
        break;
    }
  }

  return (
    <charactersContext.Provider value={characters}>
      <comicsContext.Provider value={comics}>
        <seriesContext.Provider value={series}>
          <setDataContext.Provider value={setData}>
            <categoryContext.Provider value={category}>
              {children}
            </categoryContext.Provider>
          </setDataContext.Provider>
        </seriesContext.Provider>
      </comicsContext.Provider>
    </charactersContext.Provider>
  );
}
