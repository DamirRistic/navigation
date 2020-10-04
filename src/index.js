import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import Theme from "./theme/theme";

const root = document.getElementById("root");
const app = (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

ReactDOM.render(app, root);
