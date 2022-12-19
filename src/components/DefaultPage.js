import React from "react";

import Header from "../components/menu/Header";
import MenuOptions from "../components/menu/MenuOptions";

const DefaultPage = (props) => {
  return (
    <div>
      <Header page={props.page} />
      <MenuOptions />
    </div>
  );
};

export default DefaultPage;
