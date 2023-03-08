import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  useComicsContext,
  useSetDataContext,
} from "../contexts/MarvelDataProvider";
import { Loading } from "../components/Loading";
import DetailModal from "../components/DetailModal";
import { CustomCard } from "../components/CustomCard";

export const Comics = () => {
  const comics = useComicsContext();
  const setData = useSetDataContext();

  const [comicDetail, setComicDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleOpen = (index) => {
    setComicDetail(comics[index]);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setComicDetail({});
  };

  useEffect(() => {
    setData("comics");
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {comics.length <= 0 ? (
            <Loading />
          ) : (
            comics.map((comic, i) => (
              <CustomCard
                values={comic}
                key={comic.id}
                handleOpen={() => handleOpen(i)}
              />
            ))
          )}
        </Grid>
        {showDetail && (
          <DetailModal
            show={showDetail}
            handleClose={handleClose}
            values={comicDetail}
          />
        )}
      </Box>
    </div>
  );
};
