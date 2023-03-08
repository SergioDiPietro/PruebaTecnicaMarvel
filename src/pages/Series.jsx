import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  useSeriesContext,
  useSetDataContext,
} from "../contexts/MarvelDataProvider";
import { Loading } from "../components/Loading";
import DetailModal from "../components/DetailModal";
import { CustomCard } from "../components/CustomCard";

export const Series = () => {
  const series = useSeriesContext();
  const setData = useSetDataContext();

  const [serieDetail, setSerieDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleOpen = (index) => {
    setSerieDetail(series[index]);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setSerieDetail({});
  };

  useEffect(() => {
    setData("series");
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {series.length <= 0 ? (
            <Loading />
          ) : (
            series.map((serie, i) => (
              <CustomCard
                values={serie}
                key={serie.id}
                handleOpen={() => handleOpen(i)}
              />
            ))
          )}
        </Grid>
        {showDetail && (
          <DetailModal
            show={showDetail}
            handleClose={handleClose}
            values={serieDetail}
          />
        )}
      </Box>
    </div>
  );
};
