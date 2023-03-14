import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter basename="">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </ThemeProvider>
);
