import Donnation from "../components/donnation/Donnation";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import Hero from "./hero/Hero";
import IntheNews from "./inthenews/InTheNews";


export default function Home(){
  return(
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <IntheNews />
      <Donnation />
      <Footer />
    </>
  )
}