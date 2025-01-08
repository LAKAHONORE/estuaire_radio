import { useState } from "react";
import { Lock, PersonAdd } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function LoginComponent() {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center px-0 md:px-80 py-8">
          <form action="" className="md:py-56 md:w-3/5 md:border-4 md:border-r-0 border-blue rounded-tl-md rounded-bl-md">

            {loginForm ? (
              <div className="flex flex-col animate__animated animate__backInDown">
                <div className="flex flex-col-reverse justify-center items-center gap-2">
                  <h1 className="title-font text-4xl text-center mb-4">Connexion</h1>
                  <Lock className="text-5xl text-blue"/>
                </div>
                <input type="email" placeholder="Adresse e-mail" className="px-6 py-3 bg-gray-300 placeholder:text-black outline-none md:mx-16 rounded-md" />

                <input type="passsword" placeholder="Mot de passe" className="px-6 py-3 my-8 bg-gray-300  placeholder:text-black md:mx-16 outline-none rounded-md" />

                <div className="flex flex-row justify-center items-center">
                  <input type="submit" value="Se connecter" className="bg-blue px-6 py-2 text-white font-semibold hover:bg-purple cursor-pointer transition-all outline-none rounded-md" />
                </div>

                <NavLink to={'#'} className="mt-4 text-center hover:text-blue" onClick={() => setLoginForm(!loginForm)}>
                  Vous n'avez pas de compte ?
                </NavLink>
              </div>
            ) : (
              <div className="flex flex-col animate__animated animate__backInUp">
                <div className="flex flex-col-reverse justify-center items-center gap-2">
                  <h1 className="title-font text-4xl text-center mb-4">Inscription</h1>
                  <PersonAdd className="text-5xl text-blue"/>
                </div>
                <input type="text" placeholder="Votre nom complet" className="px-6 py-3 my-3 md:mx-16 bg-gray-300 placeholder:text-black outline-none rounded-md" />

                <input type="email" placeholder="Adresse e-mail" className="px-6 py-3 my-3 md:mx-16 bg-gray-300 placeholder:text-black outline-none rounded-md" />

                <input type="passsword" placeholder="Mot de passe" className="px-6 py-3 my-3 md:mx-16 bg-gray-300 placeholder:text-black outline-none rounded-md" />

                <input type="passsword" placeholder="Confirmer le mot de passe" className="px-6 py-3 my-3 md:mx-16 bg-gray-300 placeholder:text-black outline-none rounded-md" />

                <div className="flex flex-row justify-center items-center mt-8">
                  <input type="submit" value="S'inscrire" className="bg-blue px-6 py-2 text-white font-semibold hover:bg-purple cursor-pointer transition-all rounded-md" />
                </div>

                <NavLink to={'#'} className="mt-4 text-center hover:text-blue" onClick={() => setLoginForm(!loginForm)}>
                  Vous avez déjà un compte ?
                </NavLink>
              </div>
            )}


          </form>
          <img src="/assets/login.jpg" className="hidden md:block w-2/5 border-4 border-l-0 border-blue rounded-tr-md rounded-br-md" alt="" />
        </div>
      </div>
    </>
  )
}