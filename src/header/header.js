import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemContext } from "../context/film-conext";
import { useContext } from "react";
import { Route } from "react-router-dom";
import List from "../List/List";
import Favourite from "../favourite/favourite";
import { ColorContext } from "../context/theme-context";
import Description from "../description/description";

const Header = () => {
  const [inputValue, setInputValue] = useState();
  const [rerender, setRerender] = useState(false);
  const filmList = useContext(ThemContext);
  const colorThemeContex = useContext(ColorContext);
  console.log(colorThemeContex);

  if (inputValue) {
    filmList.map((film) => {
      if (!film.film.includes(inputValue)) {
        film.visible = false;
      } else {
        film.visible = true;
      }
    });
  } else {
    filmList.map((film) => {
      film.visible = true;
    });
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const switchThemeHandler = () => {
    console.log(colorThemeContex);

    colorThemeContex.theme =
      colorThemeContex.theme === "white" ? "black" : "white";
    setRerender(!rerender);
  };
  return (
    <div>
      <div
        className={classes.header}
        style={{
          backgroundColor:
            colorThemeContex.theme === "black" ? "rgb(19, 19, 19)" : "white",
        }}
      >
        <div
          className={classes.links}
          style={{
            color: colorThemeContex.theme === "black" ? "white" : "black",
          }}
        >
          <Link to="/">Movies list</Link>
          <Link to="/favourite-movies">Favourite movies</Link>
        </div>
        <div className={classes.navbar}>
          <button onClick={switchThemeHandler}>
            {colorThemeContex.theme === "white" ? "🌞" : "🌑"}
          </button>
          <input placeholder="Search" onChange={inputHandler} />
        </div>
      </div>
      <Route path="/" exact>
        <List />
      </Route>
      <Route path="/favourite-movies">
        <Favourite />
      </Route>
      <Route path="/film-information">
        <Description />
      </Route>
    </div>
  );
};

export default Header;
