import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import PoadcastComponent from "./components/PoadcastComponent";

export default function Poadcast(){
  return(
    <>
      <Topbar />
      <Navbar />

      <PoadcastComponent />

      <Footer />
    </>
  )
}