import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import { useCategoryContext } from "../contexts/MarvelDataProvider";

export const CustomCard = ({ values, handleOpen }) => {
  const category = useCategoryContext();
  const [header, setHeader] = useState("");

  const setHeaderAttribute = () => {
    category === "characters"
      ? setHeader(values.name)
      : setHeader(values.title);
  };

  useEffect(() => {
    setHeaderAttribute();
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: 500 }}>
        <CardActionArea onClick={() => handleOpen(5)}>
          <CardMedia
            component="img"
            height="350"
            image={`${values.thumbnail.path}.${values.thumbnail.extension}`}
            alt="Thumbnail"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              height={40}
              overflow={"hidden"}
              fontWeight={"bold"}
            >
              {header}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height={80}
              overflow={"auto"}
            >
              {values.description === null || values.description === ""
                ? "Sin descripción"
                : values.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
