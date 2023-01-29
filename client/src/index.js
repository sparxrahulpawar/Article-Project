import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// font-awesome icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

//Bootstrap css  file
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//Bootstrap js file
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
