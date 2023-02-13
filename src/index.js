import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/uniqlo-store-map"> {/* 為了部署到GitHub Pages上，要加上basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
