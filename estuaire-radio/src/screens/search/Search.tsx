import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import SearchComponent from "./components/SearchComponent";

export default function Search(){
  return(
    <>
      <Topbar />
      <Navbar />
      <SearchComponent />
    </>
  )
}