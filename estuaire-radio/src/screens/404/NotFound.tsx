import { NavLink } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import { HouseDoor } from "react-bootstrap-icons";

export default function NotFound(){
  return(
    <>
    <Topbar />
    <Navbar />

    <div className="flex flex-col justify-center items-center my-8">
        <img src="/assets/404.png" className="w-400px animate-pulse" alt="" />

        <span className="my-8 text-center">
          Cette page n'est pas disponible pour le moment !
        </span>

        <NavLink to={'/'} className="flex flex-row justify-center items-center bg-blue text-whiteColor gap-3 p-3 rounded-md">

          <HouseDoor className="text-xl"/>
          <span className="font-semibold ">Retourner à l'accueil</span>

        </NavLink>
    </div>

    <Footer />
    </>
  )
}