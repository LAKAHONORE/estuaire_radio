import { ArrowLeftCircle, ArrowRightCircle, HeartFill, PlayCircleFill } from "react-bootstrap-icons";

export default function Hero(){
  return(
    <>
      <section className="flex flex-row w-full justify-center items-center h-96 gap-4 bg-whiteColor">
            <img src="/assets/hero.jpeg" className="hidden md:block w-64" alt="" />

            <div className="flex flex-col justify-center md:justify-start items-center">

                <a href="#" className="flex flex-row justify-center md:justify-start items-center gap-3 hover:text-blue transition-all">
                  <ArrowLeftCircle/>
                  <div className="flex flex-col">
                    <span className="my-1">Précédemment</span>
                    <h1 className="font-bold">Regards ailleurs</h1>
                  </div>
                </a>

              <div className="h-[1px] bg-gray-600 w-[80%] md:w-[400px]"></div>

              <span className="my-3">Actuellement à l'antenne</span>

              <h1 className="font-bold">Coucheron  Gucci</h1>

              <span>Norvège 2020</span>

              <div className="flex flex-row justify-start items-center gap-2 my-3">
                <button className="flex flex-row justify-center items-center gap-3 bg-blue text-white p-3">
                  <PlayCircleFill />
                  <span className="font-semibold">Ecouter</span>
                </button>

                <button className="flex flex-row justify-center items-center gap-3 bg-transparent border-[2px] border-blue text-black hover:text-blue p-3">
                  <HeartFill />
                  <span>Ajouter aux favoris</span>
                </button>

              </div>

              <div className="h-[1px] bg-gray-600 w-[80%] md:w-[400px]"></div>

              <span>A Suivre</span>
              <a className="flex flex-row justify-start items-center gap-4 font-semibold hover:text-blue transition-all" href="#">
                <ArrowRightCircle />
                <span>
                  L'humeur européenne de Bernard Guetta 
                </span>
              </a>
            </div>
      </section>
    </>
  )
}