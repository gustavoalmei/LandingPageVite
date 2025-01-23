import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import { Home } from "./templates/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="*" />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
