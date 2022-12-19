import React from "react";
import DefaultPage from "../components/DefaultPage";
import Footer from "../components/menu/Footer";
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../assets/css/planets.css";
const Planets = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/planets")
      .then((retorno) => {
        setDados(retorno.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="planets-page">
      <DefaultPage page="PLANETS" />
      <div className="conteudo container">
        <div className="planets">
          {dados.map((item, key) => (
            <div className="planet" key={key}>
              <h1>{item.name}</h1>
              <p>Clima: {item.climate}</p>
              <p>Terreno: {item.terrain}</p>
              <p>Gravidade: {item.gravity}</p>
              <p>Duração do Dia: {item.rotation_period} horas</p>
              <p>Duração do Ano: {item.orbital_period} dias</p>
              <p>População: {item.population}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planets;
