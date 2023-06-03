import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import "./css/style.css";
import "./css/responsive.css";
import css from "./assets/css3.png";
import html from "./assets/html.png";
import foto3x4 from "./assets/foto3x4.png";
import js from "./assets/js.png";
import mysql from "./assets/mysql.png";
import react from "./assets/react.png";
import curriculo from "./assets/Leonardo Curriculo.pdf";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

Modal.setAppElement("#root");

const ModalActive = ({ isOpen, closeModal }) => {
  return (
    <div className="p-0 mt-5">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Canais de Contato"
        className="modal-centralize corPrimaria p-3 border-0"
      >
        <div className="container-fluid m-0 p-0 border-0">
          <div className="titulo-row-modal w-100 row pb-4">
            <div className="col-11 border-0 b-0 p-0 text-center">
              <h4 className="modal-titulo ">Canais de Contato</h4>
            </div>
            <div className="col border-0 b-0 p-0 text-end">
              <button
                type="button"
                className="fs-6 text-center btn botao-fecha-modal borda-menu text-white bg-transparent m-0 p-1 bounded-circle"
                onClick={closeModal}
                aria-label="Close"
              >
                <span>X</span>
              </button>
            </div>
          </div>
        </div>

        <aside className="container-fluid text-center">
          <div className="row fs-1">
            <div className="col border-0 b-0 p-0">
              <a
                href="https://github.com/leoo1992"
                target="_blank"
                title="GitHub"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <h6 className="aside-modal">GitHub</h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.linkedin.com/in/leocustodio1992/"
                target="_blank"
                title="Linkedin"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <h6 className="aside-modal">Linkedin</h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.instagram.com/leocustodio1/"
                target="_blank"
                title="Instagram"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <h6 className="aside-modal">Insta</h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.facebook.com/Leonardo.lSantosl"
                target="_blank"
                title="Facebook"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <h6 className="aside-modal">Face</h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="Leonardo Curriculo.pdf"
                target="_blank"
                download
                title="Currículo"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
              <h6 className="aside-modal">Currículo</h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://wa.me/5548999971941?text=Ol%C3%A1+Leonardo+%21"
                target="_blank"
                title="WhatsApp"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
              </a>
              <h6 className="aside-modal">Whats</h6>
            </div>
          </div>
        </aside>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col border-0 b-0 pt-5 pb-2">
              <button
                type="button"
                className="btn borda-menu text-white fs-5"
                onClick={closeModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

function NavbarToggle({isopen,}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* ACTIVE:BUTTON */}
      <div
        className={`offcanvas offcanvas-end text-white border-2 ${
          isOpen ? "show" : ""
        }`}
        tabIndex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        {/* HEADER NAV */}
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Menu
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleNavbar}
          ></button>
        </div>

        {/* BODY NAV */}
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <h2 className="nav-texto3">Home</h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#sobre-mim" className="nav-link">
                <h2 className="nav-texto3">Sobre mim</h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projetos" className="nav-link">
                <h2 className="nav-texto3">Projetos</h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#tech" className="nav-link">
                <h2 className="nav-texto3">Tecnologias</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* FOOTER ASIDE NAV */}
      <aside className="container-contato-navbar mb-4 pb-0 container-fluid text-center justify-content-center align-content-center text-center align-self-center align-items-center">
        <button onClick={openModal} className="nav-link">
          <h1 className="offcanvas-title contato-title">Contato:</h1>
        </button>
        <div className="row fs-1 justify-content-center align-content-center text-center align-self-center align-items-center">
          <div className="col border-0 b-0 p-0">
            <a
              href="https://github.com/leoo1992"
              target="_blank"
              title="GitHub"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-github">
                <FontAwesomeIcon icon={["fab", "fa-github"]} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              GitHub
            </h6>
          </div>
          <div className="col border-0 b-0 p-0">
            <a
              href="https://www.linkedin.com/in/leocustodio1992/"
              target="_blank"
              title="Linkedin"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-linkedin">
                <FontAwesomeIcon icon={["fab", "fa-linkedin"]} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              Linkedin
            </h6>
          </div>
          <div className="col border-0 b-0 p-0">
            <a
              href="https://www.instagram.com/leocustodio1/"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-instagram">
                <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              Insta
            </h6>
          </div>
          <div className="col border-0 b-0 p-0">
            <a
              href="https://www.facebook.com/Leonardo.lSantosl"
              target="_blank"
              title="Facebook"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-facebook">
                <FontAwesomeIcon icon={["fab", "fa-facebook"]} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              Face
            </h6>
          </div>
          <div className="col border-0 b-0 p-0">
            <a
              href={curriculo}
              target="_blank"
              download
              title="Currículo"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu justify-content-center align-content-center text-center align-self-center align-items-center fa-brands fa-file-pdf">
                <FontAwesomeIcon icon={faFilePdf} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              Currículo
            </h6>
          </div>
          <div className="col border-0 b-0 p-0">
            <a
              href="https://wa.me/5548999971941?text=Ol%C3%A1+Leonardo+%21"
              target="_blank"
              title="Whattsapp"
              rel="noreferrer"
            >
              <i className="redes-sociais-menu justify-content-center align-content-center text-center align-self-center align-items-center fa-brands fa-whatsapp">
                <FontAwesomeIcon icon={["fab", "fa-whatsapp"]} />
              </i>
            </a>
            <h6 className="me-1 aside-menu-canvas justify-content-center align-content-center text-center align-self-center align-items-center">
              Whatts
            </h6>
          </div>
        </div>
      </aside>
    </div>
  
  
  );
  
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {/*-- NAVBAR */}
      <nav className="navbar navbar-dark fixed-top p-1 m-0">
        <div className="nave-container container-fluid m-0 p-0">
          <ul className="nav nav-ul m-0 p-0">
            <a
              className="nav-link text-white text-decoration-none fs-6 fw-bold"
              href="#home"
            >
              <h6 className="nav-texto2">Leonardo Santos</h6>
            </a>
            <li className="nav-item">
              <a
                className="nav-link text-white text-decoration-none fs-6 fw-bold"
                href="#sobre-mim"
              >
                <h6 className="nav-texto">Sobre</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white text-decoration-none fs-6 fw-bold"
                href="#projetos"
              >
                <h6 className="nav-texto">Projetos</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white text-decoration-none fs-6 fw-bold"
                href="#tech"
              >
                <h6 className="nav-texto">Tecnologias</h6>
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white text-decoration-none fs-6 fw-bold"
                onClick={openModal}
              >
                <h6 className="nav-texto">Contato</h6>
              </button>
            </li>
          </ul>
          {/* BUTTON */}
          <button
            className={`offcanvas offcanvas-end text-white border-2 ${
              isOpen ? "show" : ""
            }`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {/* ACTIVE:BUTTON */}
            <span className="botao-menu navbar-toggler-icon w-50 p-0 m-0"></span>
            <br />
            <h6 className="botao-menu p-0 m-0">Menu</h6>
          </button>
          <div
            className="offcanvas offcanvas-end text-white border-2"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          ></div>
        </div>
      </nav>
      <br id="home" />
      <br />
      {/* FOTO */}
      <section className="local-foto text-center pt-5 m-0">
        <div className="foto-container container-fluid m-0 justify-content-center align-content-center text-center align-self-center align-items-center">
          <div className="row m-0 p-0">
            <div className="col coluna m-0 p-0"></div>
            <div className="col-4 coluna-centro-foto corPrimaria m-0 pt-3">
              <br />
              <img
                className="foto-perfil m-0 p-0"
                src={foto3x4}
                alt="Foto Perfil"
              />
              <h3 className="m-0 p-0 text-center">Leonardo Santos</h3>
              <h5>Desenvolvedor Front-end</h5>
              {/* MODAL CONTATO */}
              <br />
              <button
                className="btn-contato btn btn-dark fw-bold"
                onClick={openModal}
              >
                Contato
              </button>
              <ModalActive isOpen={modalIsOpen} closeModal={closeModal} />
            </div>
            <div className="col coluna m-0 p-0"></div>
          </div>
        </div>
      </section>
      <br />
      {/* SOBRE MIM */}
      <section className="p-3 corPrimaria">
        <h3 className="text-center">Sobre mim</h3>
        <div className="container-fluid p-0 m-0 justify-content-center align-content-center align-self-center align-items-center">
          <div className="row p-0 m-0 justify-content-center align-content-center align-self-center align-items-center">
            <p className="texto-sobre m-0 p-0 fw-bold" id="projetos">
              Me chamo Leonardo Santos Custódio, nasci em abril de 1992, sou
              natural de Imbituba, Santa Catarina. Atualmente estou finalizando
              o curso Técnico em Desenvolvimento de Sistemas no SENAI de
              Criciúma, com formação para 12/2023. Almejo em sequência iniciar
              uma faculdade de Engenharia de Software. Sei que tenho muito a
              agregar para a área de tecnologia, pois sou fascinado por sistemas
              e por tudo de amplo e inovador que podem transformar a nossa
              realidade.
            </p>
          </div>
          <br />
        </div>
      </section>
      <br />
      {/* PROJETOS CARD */}
      <div className="corPrimaria">
        <br />
        <h3 className="text-center p-2">Projetos</h3>
        <div className="container p-0 border-0">
          <div className="row m-0 p-0 border-0">
            <div className="col m-0 p-0 border-0">
              <div className="card mb-4 border-0 bg-transparent">
                <img
                  className="card-img-top d-block border-0 bg-transparent"
                  alt="project"
                  style={{ height: "225px" }}
                />
                <div className="card-body bg-black m-0 border-0">
                  <p className="card-text text-center fs-5">Pokédex</p>
                  <p className="card-text fs-6 fw-light">
                    Tecnologias utilizadas:
                  </p>
                  <ul>
                    <li className="fs-6 fw-light">Html</li>
                    <li className="fs-6 fw-light">Javascript</li>
                    <li className="fs-6 fw-light">Css</li>
                  </ul>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group-sm">
                      <button
                        type="button"
                        className="btn-contato btn-dark btn fw-bold"
                      >
                        Ver Projeto
                      </button>
                      <button
                        type="button"
                        className="btn-contato btn-dark btn fw-bold"
                      >
                        Ver Código
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      {/*TECHS */}
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
      <br />
      {/*CONTATO*/}
      <section className="corPrimaria p-2">
        <h3 className="text-center p-2" id="contato">
          Contato
        </h3>
        <aside className="container-fluid text-center justify-content-center align-content-center text-center align-self-center align-items-center">
          <div className="row fs-1 justify-content-center align-content-center text-center align-self-center align-items-center">
            <div className="col border-0 b-0 p-0">
              <a
                href="https://github.com/leoo1992"
                target="_blank"
                title="GitHub"
                rel="noreferrer"
              >
                <i className="me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-github">
                  <FontAwesomeIcon icon={["fab", "fa-github"]} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                GitHub
              </h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.linkedin.com/in/leocustodio1992/"
                target="_blank"
                title="Linkedin"
                rel="noreferrer"
              >
                <i className="me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-linkedin">
                  <FontAwesomeIcon icon={["fab", "fa-linkedin"]} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                Linkedin
              </h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.instagram.com/leocustodio1/"
                target="_blank"
                title="Instagram"
                rel="noreferrer"
              >
                <i className="me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-instagram">
                  <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                Insta
              </h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://www.facebook.com/Leonardo.lSantosl"
                target="_blank"
                title="Facebook"
                rel="noreferrer"
              >
                <i className="me-1 justify-content-center align-content-center text-center align-self-center align-items-center fab fa-facebook">
                  <FontAwesomeIcon icon={["fab", "fa-facebook"]} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                Face
              </h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href={curriculo}
                target="_blank"
                download
                title="Currículo"
                rel="noreferrer"
              >
                <i className="justify-content-center align-content-center text-center align-self-center align-items-center fa-solid fa-file-pdf">
                  <FontAwesomeIcon icon={faFilePdf} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                Currículo
              </h6>
            </div>
            <div className="col border-0 b-0 p-0">
              <a
                href="https://wa.me/5548999971941?text=Ol%C3%A1+Leonardo+%21"
                target="_blank"
                title="WhatsApp"
                rel="noreferrer"
              >
                <i className="justify-content-center align-content-center text-center align-self-center align-items-center fa-brands fa-whatsapp">
                  <FontAwesomeIcon icon={["fab", "fa-whatsapp"]} />
                </i>
              </a>
              <h6 className="aside-menu me-1 justify-content-center align-content-center text-center align-self-center align-items-center">
                WhatsApp
              </h6>
            </div>
          </div>
          <br />
        </aside>
      </section>
      <br />
      {/* FOOTER */}
      <footer className="text-center p-0 m-0">
        <div>
          <h6 className="navbar-text p-2 m-0">
            <span> &copy; Todos os direitos reservados</span>
          </h6>
        </div>
      </footer>
    </>
  );
}

export default App;
