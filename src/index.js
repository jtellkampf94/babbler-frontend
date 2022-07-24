import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a:active {
    color: black;
  }

  a:visited {
    color: black;
  }
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
