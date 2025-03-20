import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // 👈 HashRouter use kar rahe ho
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


