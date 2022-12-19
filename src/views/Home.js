import React, { useLayoutEffect, useState } from "react";
import "../assets/css/menu.css";

import Footer from "../components/menu/Footer";
import MenuOptions from "../components/menu/MenuOptions";
import { getDuvidas, deleteDuvidas } from "../services/DataBaseService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Header from "../components/menu/Header";

const Home = () => {
  const [duvidas, setDuvidas] = useState([]);

  const buscarDuvidas = () => {
    getDuvidas()
      .then((dados) => setDuvidas(dados))
      .catch((e) => alert(e));
  };

  useLayoutEffect(() => {
    buscarDuvidas();
  }, []);

  const deletarDuvidas = async (id) => {
    try {
      await deleteDuvidas(id);
      alert("Dúvida Excluída");
      buscarDuvidas();
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <Header page="HOME" />
      <MenuOptions />
      <div className="container corpo">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Whatsapp</TableCell>
                <TableCell align="right">Dúvida</TableCell>
                <TableCell align="right">Apagar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {duvidas.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">{row.whats}</TableCell>
                  <TableCell align="right">{row.duvida}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => deletarDuvidas(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
