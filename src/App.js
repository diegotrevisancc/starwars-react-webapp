import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Login from "./views/Login";
import Menu from "./views/Menu";

function App() {
  const [login, setLogin] = useState(false);
  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"));
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
