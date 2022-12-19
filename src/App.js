import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Login from "./views/Login";
import Home from "./views/Home";
import Films from "./views/Films";
import Duvidas from "./views/Duvidas";
import People from "./views/People";
import Planets from "./views/Planets";
import Sobre from "./views/Sobre";
import Species from "./views/Species";
import Starships from "./views/Starships";
import Footer from "./components/menu/Footer";
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
      path: "/HOME",
      element: login ? <Home /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/FILMS",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/STARSHIPS",
      element: login ? (
        <Starships />
      ) : (
        <Login verificarLogin={verificarLogin} />
      ),
    },
    {
      path: "/PEOPLE",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/PLANETS",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/SPECIES",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/DUVIDAS",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/SOBRE",
      element: login ? <Sobre /> : <Login verificarLogin={verificarLogin} />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
