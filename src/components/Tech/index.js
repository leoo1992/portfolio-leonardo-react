import React from "react";
import css from "../../assets/css3.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import mysql from "../../assets/mysql.png";
import react from "../../assets/react.png";

export default function Tech() {
  return (
    <aside className="corPrimaria text-center p-2">
      <h3 id="tech" className="p-2">
        Tecnologias
      </h3>
      <div className="container-fluid text-center justify-content-center align-content-center text-center align-self-center align-items-center">
        <div className="row fs-1 justify-content-center align-content-center text-center align-self-center align-items-center">
          <div className="col border-0 b-0 p-1">
            <img
              className="techaside tech-card rounded-circle p-0 w-auto m-0 justify-content-center align-content-center text-center align-self-center align-items-center"
              src={html}
              alt="HTML5"
              title="HTML5"
              rel="noopener"
            />
          </div>
          <div className="col border-0 b-0 p-1">
            <img
              className="techaside tech-card rounded-circle p-0 w-auto m-0 justify-content-center align-content-center text-center align-self-center align-items-center"
              src={css}
              alt="CSS3"
              title="CSS3"
              rel="noopener"
            />
          </div>
          <div className="col border-0 b-0 p-1">
            <img
              className="techaside tech-card rounded-circle p-0 w-auto m-0 justify-content-center align-content-center text-center align-self-center align-items-center"
              src={js}
              alt="JavaScript"
              title="JavaScript"
              rel="noopener"
            />
          </div>
          <div className="col border-0 b-0 p-1">
            <img
              className="techaside tech-card rounded-circle p-0 w-auto m-0 justify-content-center align-content-center text-center align-self-center align-items-center"
              src={react}
              alt="React"
              title="React"
              rel="noopener"
            />
          </div>
          <div className="col border-0 b-0 p-1">
            <img
              className="techaside bg-white tech-card rounded-circle p-0 w-auto m-0 justify-content-center align-content-center text-center align-self-center align-items-center"
              src={mysql}
              alt="MySQL"
              title="MySQL"
              rel="noopener"
            />
          </div>
        </div>
        <br />
      </div>
    </aside>
  );
}
