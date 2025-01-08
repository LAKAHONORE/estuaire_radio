import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import MusiqueComponent from "./components/MusiqueComponent";

export default function Musique(){
  return(
    <>
      <Topbar />
      <Navbar />
      <MusiqueComponent />
      <Footer />
    </>
  )
}