export default function Footer(){
  return(
    <>
      <footer className="flex bottom-0 flex-col md:flex-row w-full justify-center items-center gap-8 bg-black p-8">
          <img src="/assets/logo-estuaire.png" className="w-28" alt="" />
          <p className="text-white text-center">
          © 2024 <span className="text-2xl title-font"> Estuaire Radio </span> - Votre source d'informations, de musique et de culture. 
            Nous nous engageons à promouvoir les talents locaux et à partager les voix qui comptent dans notre communauté. 
            Rejoignez-nous pour découvrir des programmes captivants et rester connecté à l'actualité en Afrique. 
            Ensemble, faisons entendre notre voix.
          </p>
      </footer>
    </>
  )
}