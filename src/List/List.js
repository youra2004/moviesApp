import classes from "./List.module.css";
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
import { DescriptionContext } from "../context/description-contex";

const List = () => {
  const filmList = useContext(ThemContext);
  const descriptionList = useContext(DescriptionContext);
  const [rerender, setRerender] = useState(false);
  const colorThemeContex = useContext(ColorContext);

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

  const descriptionHandler = (e) => {
    descriptionList[0] = e;
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
      {filmList.map((film) => {
        if (film.visible) {
          return (
            <Card sx={{ maxWidth: 200 }} className={classes.film} key={film.id}>
              <CardMedia component="img" height="280" image={film.img} />
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
                  <Link
                    to="/film-information"
                    onClick={() => {
                      descriptionHandler(film);
                    }}
                  >
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default List;
