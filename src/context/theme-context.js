import { createContext } from "react";

export const themeContext = {
  theme: "black",
};

export const ColorContext = createContext(themeContext);
