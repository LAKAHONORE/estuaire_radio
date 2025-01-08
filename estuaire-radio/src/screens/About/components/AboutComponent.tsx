import { ArrowRightCircle, Feather } from "react-bootstrap-icons";
import Subtitle from "../../components/subtitle/Subtitle";

export default function AboutComponent(){
  return(
    <>
      <div className="flex flex-col w-full">
        <Subtitle title="A Propos" />

        <div className="flex flex-col md:flex-row px-4 my-8">
          <div className="flex flex-col w-full px-2 md:w-4/5">
           <h1 className=" text-sm text-center md:text-start md:text-2xl font-semibold">Connectez-vous à la culture, à la musique et aux nouvelles d'Afrique.</h1>
            <p className="text-justify mt-6 mx-6">
             <span className="text-2xl title-font">Estuaire Radio</span>  &nbsp;
                est bien plus qu’une station de radio ; c’est une voix qui unit les cœurs et les esprits de l’Afrique. Fondée en [année], notre radio est née du désir de fournir une information de qualité, de promouvoir les cultures africaines et d’offrir une plateforme d’expression à chaque citoyen.
                Notre mission est simple : inspirer, éduquer et divertir. En mettant à l’honneur la richesse de notre patrimoine culturel, nous diffusons chaque jour une variété d’émissions qui touchent des millions d’auditeurs.
                Notre équipe est composée d’animateurs et de journalistes passionnés qui, chaque jour, travaillent pour offrir des contenus authentiques et diversifiés. Qu’il s’agisse de musique, d’actualités ou de débats, chaque programme reflète les valeurs de notre radio : authenticité, diversité et engagement envers la communauté.
                Rejoignez-nous, écoutez-nous, et faites partie de cette aventure unique.
            </p>


            <h1 className="flex flex-row justify-start items-center gap-2 text-2xl font-semibold my-12 text-blue">
              <Feather />
              <span> Mission et Vision</span>
            </h1>

            
            <div className="flex flex-row justify-start items-center gap-4 my-6">
              <ArrowRightCircle className="font-extrabold text-blue" />
              <span className="font-semibold">Mission</span>
            </div>

            <p className="text-justify mx-6">
              Ce que la radio cherche à accomplir pour sa communauté. Par exemple : “Notre mission est de donner une voix à chaque citoyen, de promouvoir la culture africaine et de fournir des informations fiables et accessibles.”
            </p>

            <div className="flex flex-row justify-start items-center gap-4 my-6">
              <ArrowRightCircle className="font-extrabold text-blue" />
              <span className="font-semibold">Vision</span>
            </div>

            <p className="text-justify mx-6">
              Une déclaration qui exprime l’ambition à long terme de la radio. Par exemple, “Nous aspirons à être la première source d’information et de divertissement en Afrique, en unissant et en inspirant nos auditeurs.”
            </p>




            <h1 className="flex flex-row justify-start items-center gap-2 text-2xl font-semibold my-12 text-blue">
              <Feather />
              <span>  Les Valeurs de la Radio</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-start items-center gap-4 my-2">
              <span className="font-semibold">Authenticité : </span>
              <span className="text-center">S’engager à refléter la réalité africaine sans filtre.</span>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 my-2">
              <span className="font-semibold">Accessibilité : </span>
              <span className="text-center">Permettre un accès gratuit et facile à l’information.</span>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 my-2">
              <span className="font-semibold">Diversité culturelle : </span>
              <span className="text-center">Mettre en avant les différentes cultures, langues et musiques d’Afrique.</span>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-center gap-2 my-2">
              <span className="font-semibold">Éducation et sensibilisation : </span>
              <span className="text-center">Contribuer à l’information et à l’éducation des auditeurs sur des sujets clés comme la santé, l’agriculture, l’éducation, etc.</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}