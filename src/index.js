import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./styles/variables.css";
import "./reset.css";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  primaryColor: "#F4F4F4",
  secondColor: "#FF9233",
  thirdColor: "#011827",
};

const darkTheme = {
  primaryColor: "#333333",
  secondColor: "#CFD7C7",
  thirdColor: "#4E9EA6",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={localStorage.getItem("theme") === "light" ? lightTheme : darkTheme}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
