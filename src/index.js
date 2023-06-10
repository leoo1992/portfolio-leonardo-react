import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/background.css";
//COMPONENTS
import Background from "./components/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>
);
