import React from "react";
import DefaultPage from "../components/DefaultPage";
import Footer from "../components/menu/Footer";
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../assets/css/filmes.css";
const Films = () => {
  const [dados, setDados] = useState([{ name: "Diego" }, { name: "Marcos" }]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/films")
      .then((retorno) => {
        setDados(retorno.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <DefaultPage page="FILMES" />
      <div className="conteudo container">
        <div className="filmes">
          {dados.map((item, key) => (
            <div className="filme" key={key}>
              <h1>{item.title}</h1>
              <h2>Episode {item.episode_id}</h2>
              <h3>{item.release_date}</h3>
              <h4>Diretor: {item.director}</h4>
              <h4>Produtor: {item.producer}</h4>
              <p>{item.opening_crawl}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Films;
