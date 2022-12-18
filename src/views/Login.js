import "../assets/css/login.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useLayoutEffect } from "react";
import HeaderLogin from "../components/login/HeaderLogin";
import loginService from "../services/AutenticatorService";
const Login = (props) => {
  const [lembrarme, setLembrarMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validar = async () => {
    try {
      await loginService(email, password);
      sessionStorage.setItem("login", true);
      props.verificarLogin();
      navigate("/HOME");
    } catch (error) {
      alert("error");
    }
  };

  /*lembrar*/
  useLayoutEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("passsword"));
      setLembrarMe(true);
    }
  }, []);

  /*Armazenar Login e Senha*/
  const armazenarEmailSenha = () => {
    setLembrarMe(!lembrarme);
    if (!lembrarme) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };
  /*Limpar Credenciais*/
  const limparDados = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <section className="login-page">
      <HeaderLogin />
      <div className="login login-container">
        <TextField
          className="text-field"
          id="standart-basic"
          label="Email"
          fullWidth
          type="email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="text-field"
          id="standart-basic"
          label="Password"
          fullWidth
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lembrar"
            checked={lembrarme}
            onChange={armazenarEmailSenha}
          />
        </FormGroup>
        <div className="login-buttons">
          <Button
            variant="contained"
            style={{ margin: "0 10px" }}
            onClick={validar}
          >
            Entrar
          </Button>
          <Button
            variant="outlined"
            style={{ margin: "0 10px" }}
            onClick={limparDados}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
