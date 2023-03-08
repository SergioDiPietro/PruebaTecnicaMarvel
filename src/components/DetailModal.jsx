import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useCategoryContext } from "../contexts/MarvelDataProvider";
import { Loading } from "./Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetailModal ({ handleClose, show, values }) {
  const category = useCategoryContext();
  const [header, setHeader] = useState("");
  const [details, setDetails] = useState("");

  const setCategory = () => {
    switch (category) {
      case "characters":
        setHeader(values.name);
        setDetails(`Eventos: ${values.events.available}, 
        Comics: ${values.comics.available}, 
        Series: ${values.series.available},
        Historias: ${values.stories.available}`);
        break;
      case "comics":
        setHeader(values.title);
        setDetails(`Páginas: ${values.pages}, 
        Serie: ${values.series.available},
        Personajes: ${values.characters.available}`);
        break;
      case "series":
        setHeader(values.title);
        console.log(values);
        setDetails(`Inicio - Fin: ${values.startYear} - ${values.endYear}, 
        Comics: ${values.comics.available}, 
        Personajes: ${values.characters.available}`);
        break;
      default:
        break;
    }
  } 

  useEffect(() => {
    setCategory();
  }, []);

  return (
    <div>
      {values === {} ? (
        <Loading />
      ) : (
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {header}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {details}
            </Typography>
            <Button onClick={handleClose}>Cerrar</Button>
          </Box>
        </Modal>
      )}
    </div>
  );
}
