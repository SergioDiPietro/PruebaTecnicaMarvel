import React, { useState, useContext } from "react";
import { getMarvelData } from "../services/services";

const charactersContext = React.createContext();
const comicsContext = React.createContext();
const seriesContext = React.createContext();
const setDataContext = React.createContext();
const categoryContext = React.createContext();
const setCategoryContext = React.createContext();

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

export function useSetCategoryContext() {
  return useContext(setCategoryContext);
}

export function MarvelDataProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [categoryState, setCategoryState] = useState("");

  const setCategory = (category) => {
    setCategoryState(category);
  }

  const setData = async (category) => {
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
            <categoryContext.Provider value={categoryState}>
              <setCategoryContext.Provider value={setCategory}>
                {children}
              </setCategoryContext.Provider>
            </categoryContext.Provider>
          </setDataContext.Provider>
        </seriesContext.Provider>
      </comicsContext.Provider>
    </charactersContext.Provider>
  );
}
