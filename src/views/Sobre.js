import React from "react";
import DefaultPage from "../components/DefaultPage";
import "../assets/css/sobre.css";
import diego from "../assets/images/diego.png";
import linkedin from "../assets/images/linkedin.png";
import logo from "../assets/images/logo.png";
import github from "../assets/images/github.png";
const Sobre = () => {
  return (
    <div className="sobre-page">
      <DefaultPage page="SOBRE" />
      <div className="sobre">
        <img className="criador" src={diego} alt=""></img>
        <div className="buttons">
          <h3>
            Projeto Desenvolvido para a Disciplina de Tópicos Especiais em
            Programação.
          </h3>
          <p>
            Tecnologias Utilizadas: React, Firebase, RestAPI com Axios, Material
            UI, Css, Javascript e HTML5.
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/diego-trevisan-cc/">
              <img className="button" src={linkedin} alt="" />
            </a>
            <a href="https://diegotrevisan.com">
              <img className="button" src={logo} alt="" />
            </a>
            <a href="https://github.com/diegotrevisancc">
              <img className="button" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
