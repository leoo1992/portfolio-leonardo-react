// imports
import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// Fonts & Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// CSS
import "./css/style.css";
import "./css/responsive.css";
// assets
import curriculo from "./assets/Leonardo Curriculo.pdf";
import pokedex from "./assets/pokedex.png";
import imc from "./assets/imc.png";
import kanban from "./assets/kanban.png";
import calculoViagem from "./assets/calculoViagem.png";
import medias from "./assets/medias.png";
import caixaEletronico from "./assets/caixaEletronico.png";
import calculadora from "./assets/calculadora.png";
import mediasVarias from "./assets/mediasVarias.png";
import valoresIguais from "./assets/valoresIguais.png";

//COMPONENTS
import SobreMin from "./components/SobreMin";
import Tech from "./components/Tech";
import FotoPerfil from "./components/FotoPerfil";
import Footer from "./components/Footer";

library.add(fab, fas);
Modal.setAppElement("#root");

// Modal
function ModalActive({ isOpen, closeModal }) {
  return (
    <div className="p-0 mt-5">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        aria-label="Canais de Contato"
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
                href={curriculo}
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
}
// Navbar
function NavbarOffcanvas({ isOpen, closeNav }) {
  let [modalIsOpen, setModalIsOpen] = useState(false);
  let openModal = () => {
    setModalIsOpen(true);
  };
  let closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeNav}
        className="p-3 w-75 h-100 nav-position"
      >
        {/* HEADER NAV */}
        <div className="offcanvas-header text-center">
          <h1
            className="offcanvas-title offcanvas-menu container-contato-navbar container-fluid text-center justify-content-center align-content-center text-center align-self-center align-items-center"
            id="offcanvasDarkNavbarLabel"
          >
            Menu
          </h1>
          <button
            type="button"
            className="btn-menu-fecha fs-6 text-center btn botao-fecha-modal borda-menu text-white bg-transparent m-0 p-1"
            onClick={closeNav}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span>X</span>
          </button>
        </div>
        {/* BODY NAV */}
        <div className="offcanvas-body p-3">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeNav}>
                <h2 className="nav-texto3">
                  <FontAwesomeIcon icon={["fa", "fa-house"]} /> Home
                </h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#sobre-mim" className="nav-link" onClick={closeNav}>
                <h2 className="nav-texto3">
                  <FontAwesomeIcon icon={["fa", "fa-user-check"]} /> Sobre mim
                </h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projetos" className="nav-link" onClick={closeNav}>
                <h2 className="nav-texto3">
                  <FontAwesomeIcon icon={["fa", "fa-chalkboard-user"]} />{" "}
                  Projetos
                </h2>
              </a>
            </li>
            <li className="nav-item">
              <a href="#tech" className="nav-link" onClick={closeNav}>
                <h2 className="nav-texto3">
                  <FontAwesomeIcon icon={["fa", "fa-gears"]} /> Tecnologias
                </h2>
              </a>
            </li>
          </ul>
        </div>
        {/* FOOTER ASIDE NAV */}
        <aside className="container-contato-navbar mb-4 pb-0 container-fluid text-center justify-content-center align-content-center text-center align-self-center align-items-center">
          <h1 className="offcanvas-title contato-title" onClick={openModal}>
            Contato:
          </h1>
          <ModalActive isOpen={modalIsOpen} closeModal={closeModal} />
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
      </Modal>
    </div>
  );
}

function App() {
  const [displayPage1, setDisplayPage1] = useState(true);
  const [displayPage2, setDisplayPage2] = useState(false);

  const handleButtonClick = () => {
    setDisplayPage1(false);
    setTimeout(() => {
      setDisplayPage2(true);
    }, 1000);
  };

  let [modalIsOpen, setModalIsOpen] = useState(false);
  let [navIsOpen, setNavIsOpen] = useState(false);

  let openModal = () => {
    setModalIsOpen(true);
  };
  let closeModal = () => {
    setModalIsOpen(false);
  };

  let openNav = () => {
    setNavIsOpen(true);
  };
  let closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <>
      {/* Página 1 */}
      <CSSTransition
        in={displayPage1}
        timeout={1000}
        classNames="fade-transition"
        unmountOnExit
      >
        <div className="page-container page1">
          <div className="centralize-start m-0 p-0 text-center">
            <div className="centralize-start-itens text-center m-0 p-0">
              <span className="inicio-texto fs-2 text-center m-0 p-0">
                Bem Vindo(a) !
                <br />
              </span>
              <span className="inicio-texto fs-2 text-center m-0 p-0">
                É um prazer em ter você aqui
                <br />
              </span>
              <br />
              <br />
            </div>
            <div className="centralize-start-itens m-0 p-0">
              <button
                className="btn btn-dark btn-contato text-white fs-3 p-2 m-1"
                onClick={handleButtonClick}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={displayPage2}
        timeout={1000}
        classNames="fade-transition"
        unmountOnExit
      >
        <div className="page-container page2">
          {/*-- NAVBAR */}
          <nav className="navbar navbar-topo navbar-dark p-1 m-0">
            <div className="nave-container container-fluid m-0 p-0">
              <ul className="nav nav-ul m-0 p-0" onClick={closeNav}>
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-decoration-none fs-6 fw-bold"
                    href="#home"
                    onClick={closeModal}
                  >
                    <span className="nav-texto2">
                      <FontAwesomeIcon icon={["fa", "fa-house"]} /> Leonardo
                      Santos
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-decoration-none fs-6 fw-bold"
                    href="#sobre-mim"
                    onClick={closeModal}
                  >
                    <span className="nav-texto">
                      <FontAwesomeIcon icon={["fa", "fa-user-check"]} /> Sobre
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-decoration-none fs-6 fw-bold"
                    href="#projetos"
                    onClick={closeModal}
                  >
                    <span className="nav-texto">
                      <FontAwesomeIcon icon={["fa", "fa-chalkboard-user"]} />{" "}
                      Projetos
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-decoration-none fs-6 fw-bold"
                    href="#tech"
                    onClick={closeModal}
                  >
                    <span className="nav-texto">
                      <FontAwesomeIcon icon={["fa", "fa-gears"]} /> Tecnologias
                    </span>
                  </a>
                </li>
                <li className="nav-item nav-texto">
                  <button
                    className="nav-link text-white text-decoration-none fs-6 fw-bold btn m-0"
                    onClick={openModal}
                  >
                    <span className="nav-texto">
                      <FontAwesomeIcon icon={["fa", "fa-phone"]} /> Contato
                    </span>
                  </button>
                </li>
              </ul>
              {/* BUTTON NAVBAR TOGGLER */}
              <div
                className="nav-item btn-menu navbar-dark "
                onClick={closeModal}
              >
                <button
                  type="button"
                  className="navbar-toggler botao-menu borda-menu"
                  onClick={openNav}
                  data-bs-toggle="offcanvas"
                  data-bs-target="offcanvasDarkNavbar"
                  aria-controls=" offcanvasDarkNavbar"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    onClick={closeModal}
                  ></span>
                </button>
              </div>
            </div>
            <NavbarOffcanvas isOpen={navIsOpen} closeNav={closeNav} />
          </nav>
          <br id="home" />
          <br />
          {/* FOTO */}
          <section className="local-foto text-center m-0">
            <div className="foto-container container-fluid m-0 justify-content-center align-content-center text-center align-self-center align-items-center">
              <div className="row m-0 p-0">
                <div className="col coluna m-0 p-0"></div>
                <div className="col-4 coluna-centro-foto corPrimaria m-0 pt-3">
                  <FotoPerfil />
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
              <br id="sobre-mim" />
              <br />
            </div>
          </section>
          {/* SOBRE MIM */}
          <SobreMin />
          <br />
          {/* PROJETOS CARD */}
          <div className="corPrimaria">
            <br />
            <h3 className="text-center">Projetos</h3>
            <div className="w-100 h-100">
              <Carousel className="carousel-index w-100 h-100 m-0 p-0">
                {/* 1 - Pokedex*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={pokedex}
                      alt="pokedex"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Projeto Pokédex API
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://i98hx2.csb.app/"
                              target="_blank"
                              title="Pokedex"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/PokeDex"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 2 - Calculadora IMC*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={imc}
                      alt="imc"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Calculadora IMC em JS
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://gsutqs.csb.app/"
                              target="_blank"
                              title="Calculadora Imc"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/Calculadora_IMC"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 3 - Kanban*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className=" img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={kanban}
                      alt="kanban"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Kanban em React
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://qqi5wu-3000.csb.app/"
                              target="_blank"
                              title="Kanban"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/Kanban_React"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 4 - Custo viagem*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={calculoViagem}
                      alt="calculoViagem"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Calculo Custo de Viagem
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://cddppj.csb.app/"
                              target="_blank"
                              title="Calculo Custo de Viagem"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/CustoViagem"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 5 - Medias Simples*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={medias}
                      alt="medias"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Calculadora de médias JS
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://n9gxh2.csb.app/"
                              target="_blank"
                              title="medias"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/desafio"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 6 Contador de cedulas*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={caixaEletronico}
                      alt="caixaEletronico"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Contador de notas - caixa eletronico em JS
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://52rmqb.csb.app/"
                              target="_blank"
                              title="caixaEletronico"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/ContadorDeNotasDisponiveis"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 7 Calculadora*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={calculadora}
                      alt="calculadora"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Calculadora em JS
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://w2qe5y.csb.app/#"
                              target="_blank"
                              title="calculadora"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/CalculadoraJavaScript"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 8 Media Varios*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={mediasVarias}
                      alt="mediasVarias"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Calculadora de médias de varios Valores em JS
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://kpftqh.csb.app/"
                              target="_blank"
                              title="mediasVarias"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/MediaVariosValores"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* 9 Verificador de Igualdade em vetores*/}
                <Carousel.Item className=" w-100 h-100 m-0 p-0 ">
                  <div className="flex-container-project m-0 p-0 ">
                    <img
                      className="img-carousel mt-3 w-50 h-50 rounded-5 m-0 p-0"
                      src={valoresIguais}
                      alt="valoresIguais"
                    />
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="row mt-5">
                      <div className="col mt-5">
                        <br />
                        <br className="mt-5" />
                        <Carousel.Caption className="p-3 rounded-5 m-0">
                          <div>
                            <h3 className="card-text text-center fs-6 fw-bolder">
                              Verificador de numeros iguais em vetores
                            </h3>
                          </div>
                          <div className="btn-group p-0 m-0 ">
                            <a
                              href="https://x2i0l7.csb.app/"
                              target="_blank"
                              title="valoresIguais"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark btn m-1 fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Projeto</span>
                              </button>
                            </a>
                            <a
                              href="https://github.com/leoo1992/verificadorValoresIguais"
                              target="_blank"
                              title="Github"
                              rel="noreferrer"
                            >
                              <button
                                type="button"
                                className="btn-contato btn-dark m-1 btn fw-bolder fs-6 p-1"
                              >
                                <span className="btn-project">Ver Código</span>
                              </button>
                            </a>
                          </div>
                        </Carousel.Caption>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />
          </div>
          <br />
          {/*TECHS */}
          <Tech />
          <br />
          {/*CONTATO*/}
          <section className="corPrimaria p-2">
            <h3 className="text-center p-2" id="contato">
              Contato
            </h3>
            <aside className="container-fluid justify-content-center align-content-center text-center align-self-center align-items-center">
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
          <Footer />
        </div>
      </CSSTransition>
    </>
  );
}
export default App;
