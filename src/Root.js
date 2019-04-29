import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/muiTheme";
import App from "./components/App";

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

export default Root;
