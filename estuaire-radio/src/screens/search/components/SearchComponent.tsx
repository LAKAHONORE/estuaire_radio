import { Search } from "react-bootstrap-icons";
import Subtitle from "../../components/subtitle/Subtitle";

export default function SearchComponent(){

  const handleSubmit = () => {

    alert("Recherche en cours !");
  }

  return(
    <>
      <Subtitle title="Recherche" />

      <div className="flex flex-col w-full h-[calc(100dvh-64px)] md:h-[calc(100dvh-96px)] bg-no-repeat" style={{background:'url("/assets/search.jpg")'}}>

        <form action="#" method="#" autoComplete="off" className="my-12 w-full px-8 md:px-0">
              <div className="flex flex-row justify-center md:justify-start items-center w-full md:w-1/3 md:mx-32 md:px-6">
                <Search className="text-2xl text-blue z-30 -mr-2"/>
                <input type="text" name="search" id="search" placeholder="Rechercher sur le site" className="px-10 md:px-12 w-[80%] py-3 -ml-6 z-20 bg-gray-300 outline-none"/>
                <button type="submit" className="text-white font-semibold py-3 px-10 rounded-tr-md rounded-br-md bg-blue hover:bg-blue-dark transition-all" onClick={()=>handleSubmit()}>Rechercher</button>
              </div>
        </form>
      </div>
    </>
  )
}