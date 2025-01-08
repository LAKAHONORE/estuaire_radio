import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import LoginComponent from "./components/LoginComponent";

export default function Login(){
  return(
    <>
      <Topbar />
      <Navbar />
      <LoginComponent />

      <Footer />
    </>
  )
}