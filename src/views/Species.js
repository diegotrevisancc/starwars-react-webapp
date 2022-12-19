import React from "react";
import DefaultPage from "../components/DefaultPage";
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../assets/css/species.css";
const Species = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/species")
      .then((retorno) => {
        setDados(retorno.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="species-page">
      <DefaultPage page="ESPECIES" />
      <div className="conteudo container">
        <div className="species">
          {dados.map((item, key) => (
            <div className="planet" key={key}>
              <h1>{item.name}</h1>
              <p>Altura media: {item.average_height} cm</p>
              <p>Tempo de vida Medio: {item.average_lifespan} anos</p>
              <p>Linguas: {item.language}</p>
              <p>Classificação: {item.classification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
