import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { light, purpleDark } from "./assets/styles/themes/Theme.styled";
import { GlobalStyles } from "./assets/styles/global/Global";

import Auth from "./core/views/Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={purpleDark}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);