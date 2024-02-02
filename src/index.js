// importing 2 libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Strict mode, for everything that is in between where React.StrictMode starts and ends
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
