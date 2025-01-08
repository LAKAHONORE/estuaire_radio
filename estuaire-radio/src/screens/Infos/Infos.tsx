import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import InfosComponent from "./components/InfosComponent";

export default function Infos(){
  return(
    <>
      <Topbar />
      <Navbar />
      <InfosComponent />

      <Footer />
    </>
  )
}