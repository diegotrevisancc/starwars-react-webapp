import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="container cabecalho">
        <h1 className="title">Star Wars Fans</h1>
        <h3>{props.page}</h3>
        <p>{props.page === "HOME" ? <p>Acessos: {props.acessos}</p> : null}</p>
      </div>
    </div>
  );
};

export default Header;
