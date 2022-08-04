import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import theme from "./themes";
import RoutingContainer from "./Routes";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <RoutingContainer />
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
