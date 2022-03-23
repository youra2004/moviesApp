import classes from "./description.module.css";
import { useContext } from "react";
import { DescriptionContext } from "../context/description-contex";
import { useState } from "react";
import { ColorContext } from "../context/theme-context";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Description = () => {
  const descriptionList = useContext(DescriptionContext);
  const [rerender, setRerender] = useState(false);
  const colorThemeContex = useContext(ColorContext);
  let filmListRender = [];

  descriptionList.map((film) => {
    if (film.favourite === true) {
      filmListRender.push(film);
    }
  });

  const favouriteHandler = (e) => {
    console.log(+e.target.id);
    descriptionList.map((film) => {
      if (e.target.id === film.id) {
        console.log("work");
        film.favourite = !film.favourite;
        setRerender(!rerender);
      }
    });
  };
  return (
    <div
      className={classes.list}
      style={{
        backgroundColor:
          colorThemeContex.theme === "black" ? "rgb(33, 45, 51)" : "grey",
        color: colorThemeContex.theme === "black" ? "white" : "black",
      }}
    >
      {descriptionList.map((film) => (
        <Card sx={{ maxWidth: 400 }} className={classes.film} key={film.id}>
          <CardMedia component="img" height="450" image={film.img} />
          <CardContent
            sx={{
              backgroundColor:
                colorThemeContex.theme === "black"
                  ? "rgb(19, 19, 19)"
                  : "white",
              color: colorThemeContex.theme === "black" ? "white" : "black",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {film.title}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {film.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              backgroundColor:
                colorThemeContex.theme === "black"
                  ? "rgb(19, 19, 19)"
                  : "white",
              color: colorThemeContex.theme === "black" ? "white" : "black",
            }}
          >
            <Button
              size="small"
              sx={{ fontSize: 20 }}
              onClick={favouriteHandler}
              id={film.id}
            >
              {film.favourite ? "❤" : "🤍"}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Description;
