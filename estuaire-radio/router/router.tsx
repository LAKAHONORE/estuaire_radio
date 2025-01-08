import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/Home/Home";
import NotFound from "../src/screens/404/NotFound";
import About from "../src/screens/About/About";
import Infos from "../src/screens/Infos/Infos";
import Musique from "../src/screens/musique/Musique";
import Poadcast from "../src/screens/poadcast/Poadcast";
import Search from "../src/screens/search/Search";
import Login from "../src/screens/login/Login";

const routes = createBrowserRouter([

  {
    path: "/",
    element : <Home />,
  },
  {
    path: "/about",
    element : <About />,
  },
  {
    path : "/infos",
    element : <Infos />,
  },
  {
    path: "/musique",
    element : <Musique />
  },
  {
    path: "/poadcast",
    element : <Poadcast />,
  },
  {
    path: "/search",
    element : <Search />
  },
  {
    path : "/login",
    element : <Login />,
  },
  {
    path: "*",
    element : <NotFound />,
  }
]);

export default routes;