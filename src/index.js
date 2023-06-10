import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/background.css";
//COMPONENTS
import Footer from "./components/Footer";
import Background from "./components/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <App />
    <Footer />
  </React.StrictMode>
);
