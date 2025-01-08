import Donnation from "../components/donnation/Donnation";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import AboutComponent from "./components/AboutComponent";

export default function About(){
  return(
    <>
      <Topbar />
      <Navbar />
      <AboutComponent />
      <Donnation />
      <Footer />
    </>
  )
}