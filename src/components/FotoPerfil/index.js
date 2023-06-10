import React from "react";
import foto3x4 from "../../assets/foto3x4.png";

export default function FotoPerfil() {
  return (
    <>
      <img className="foto-perfil m-0 p-0" src={foto3x4} alt="Foto Perfil" />
      <h3 className="m-0 p-0 text-center">Leonardo Santos</h3>
      <h5>Desenvolvedor Front-end</h5>
    </>
  );
}
