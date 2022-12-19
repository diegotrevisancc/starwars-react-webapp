import React from "react";
import "../assets/css/menu.css";
import "../assets/css/cadastro-duvidas.css";
import Header from "../components/menu/Header";
import MenuOptions from "../components/menu/MenuOptions";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { salvaDuvidas } from "../services/DataBaseService";
import { useNavigate } from "react-router-dom";

const Duvidas = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [duvida, setDuvida] = useState("");
  const limparDados = () => {
    setNome("");
    setWhats("");
    setDuvida("");
  };

  const salvaDados = async () => {
    const dados = {
      nome: nome,
      whats: whats,
      duvida: duvida,
    };
    try {
      await salvaDuvidas(dados);
      alert("Sua dúvida será respondida em breve!");
      navigate("/HOME");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="duvidas">
      <Header page="DUVIDAS" />
      <MenuOptions />
      <div className="container corpo">
        <div className="conteudo cadastro">
          <TextField
            label="Nome"
            variant="outlined"
            className="textfield"
            style={tf}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Whatsapp"
            variant="outlined"
            className="textfield"
            style={tf}
            value={whats}
            onChange={(e) => setWhats(e.target.value)}
          />
          <TextField
            label="Duvida"
            variant="outlined"
            className="textfield"
            style={tf}
            value={duvida}
            onChange={(e) => setDuvida(e.target.value)}
          />
          <Button style={button} variant="contained" onClick={salvaDados}>
            Cadastrar
          </Button>
          <Button style={button} variant="outlined" onClick={limparDados}>
            Limpar Dados
          </Button>
        </div>
      </div>
    </div>
  );
};
const tf = {
  width: "calc(50% - 20px)",
  padding: "10px",
};

const button = {
  margin: "10px",
};
export default Duvidas;
