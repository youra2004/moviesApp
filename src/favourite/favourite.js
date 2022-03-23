import classes from "./favourite.module.css";
import { useContext, useState } from "react";
import { ThemContext } from "../context/film-conext";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { ColorContext } from "../context/theme-context";

const Favourite = () => {
  const filmList = useContext(ThemContext);
  const [rerender, setRerender] = useState(false);
  const colorThemeContex = useContext(ColorContext);
  let filmListRender = [];

  filmList.map((film) => {
    if (film.favourite === true) {
      filmListRender.push(film);
    }
  });

  const favouriteHandler = (e) => {
    console.log(+e.target.id);
    filmList.map((film) => {
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
      {filmListRender.map((film) => (
        <Card sx={{ maxWidth: 210 }} className={classes.film} key={film.id}>
          <CardMedia component="img" height="300" image={film.img} />
          <CardContent
            sx={{
              backgroundColor:
                colorThemeContex.theme === "black"
                  ? "rgb(19, 19, 19)"
                  : "white",
              color: colorThemeContex.theme === "black" ? "white" : "black",
            }}
          >
            <Typography gutterBottom variant="p" component="div">
              {film.title}
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
            <Button size="small">
              <Link to="/film-information">Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Favourite;
