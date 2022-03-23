import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./index.module.css";
import App from "./App/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
