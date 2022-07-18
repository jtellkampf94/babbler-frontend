import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import MainRouter from "./MainRouter";
import theme from "../../config/theme";
import history from "../../utils/history";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
