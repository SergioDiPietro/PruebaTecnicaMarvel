import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  useCharactersContext,
  useSetDataContext,
} from "../contexts/MarvelDataProvider";
import { Loading } from "../components/Loading";
import DetailModal from "../components/DetailModal";
import { CustomCard } from "../components/CustomCard";

export const Characters = () => {
  const characters = useCharactersContext();
  const setData = useSetDataContext();

  const [charDetail, setCharDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleOpen = (index) => {
    setCharDetail(characters[index]);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setCharDetail({});
  };

  useEffect(() => {
    setData("characters");
  }, []);

  return (
    <div className="grid">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {characters.length <= 0 ? (
            <Loading />
          ) : (
            characters.map((character, i) => (
              <CustomCard
                values={character}
                key={character.id}
                handleOpen={() => handleOpen(i)}
              />
            ))
          )}
        </Grid>
        {showDetail && (
          <DetailModal
            show={showDetail}
            handleClose={handleClose}
            values={charDetail}
          />
        )}
      </Box>
    </div>
  );
};
