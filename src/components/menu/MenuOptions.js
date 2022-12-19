import React from "react";
import { useNavigate } from "react-router-dom";
const MenuOptions = () => {
  const navigate = useNavigate();
  const logoff = () => {
    sessionStorage.removeItem("login");
    let contador = 1;
    if (localStorage.getItem("acessos") >= 1) {
      contador = parseInt(localStorage.getItem("acessos")) + 1;
    }
    localStorage.setItem("acessos", contador);
    navigate("/");
  };
  const toHome = () => {
    navigate("/HOME");
  };

  const toFilms = () => {
    navigate("/FILMS");
  };

  const toStarships = () => {
    navigate("/STARSHIPS");
  };

  const toPeople = () => {
    navigate("/PEOPLE");
  };

  const toPlanets = () => {
    navigate("/PLANETS");
  };
  const toSpecies = () => {
    navigate("/SPECIES");
  };

  const toDuvidas = () => {
    navigate("/DUVIDAS");
  };
  const toSobre = () => {
    navigate("/SOBRE");
  };
  return (
    <div>
      <div className="menu">
        <div className="item-menu" onClick={toHome}>
          HOME
        </div>
        <div className="item-menu" onClick={toFilms}>
          FILMS
        </div>
        <div className="item-menu" onClick={toStarships}>
          STARSHIPS
        </div>
        <div className="item-menu" onClick={toPeople}>
          PEOPLE
        </div>
        <div className="item-menu" onClick={toPlanets}>
          PLANETS
        </div>
        <div className="item-menu" onClick={toSpecies}>
          SPECIES
        </div>
        <div className="item-menu" onClick={toDuvidas}>
          DUVIDAS
        </div>
        <div className="item-menu" onClick={toSobre}>
          SOBRE
        </div>
        <div className="item-menu" onClick={logoff}>
          LOGOFF
        </div>
      </div>
    </div>
  );
};

export default MenuOptions;
