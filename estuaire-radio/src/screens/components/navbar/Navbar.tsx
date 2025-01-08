import { BoxArrowInRight, Facebook, Heart, Instagram, Linkedin, List, Search, Spotify, TwitterX, XLg } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import DropDown from "./components/DropDown";
import { useState } from "react";

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="flex flex-row w-full h-16 top-0 md:top-8 sticky z-50 justify-between items-center bg-blue px-4">
        <NavLink to={'/'} className="flex flex-row justify-center items-center gap-4 border-[4px] border-black bg-white px-4 md:translate-x-80 md:translate-y-6 md:-rotate-12 md:hover:scale-110 rounded-md transition-all">
          <img src="/assets/logo-estuaire.png" className="w-8 md:w-12" alt="" />
          <span className="title-font text-xl md:text-2xl">Estuaire Radio</span>
        </NavLink>



        <ul className="hidden md:flex flex-row justify-center items-center gap-8 ">

          <DropDown />

          <li>
            <NavLink to={'/about'} className="text-whiteColor font-semibold transition-all">
              <span className="relative hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:scale-x-75 hover:after:border-b-4 hover:after:border-colorBlue hover:after:bottom-0 hover:after:border-b-whiteColor hover:after:origin-left transition-all cursor-pointer">
                A Propos
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/infos'} className="text-whiteColor font-semibold transition-all">
              <span className="relative hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:scale-x-75 hover:after:border-b-4 hover:after:border-colorBlue hover:after:bottom-0 hover:after:border-b-whiteColor hover:after:origin-left transition-all cursor-pointer">
                Infos
              </span>
            </NavLink>
          </li>


          <li>
            <NavLink to={'/musique'} className="text-whiteColor font-semibold transition-all">
              <span className="relative hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:scale-x-75 hover:after:border-b-4 hover:after:border-colorBlue hover:after:bottom-0 hover:after:border-b-whiteColor hover:after:origin-left transition-all cursor-pointer">
                Musique
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/poadcast'} className="text-whiteColor font-semibold transition-all">
              <span className="relative hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:scale-x-75 hover:after:border-b-4 hover:after:border-colorBlue hover:after:bottom-0 hover:after:border-b-whiteColor hover:after:origin-left transition-all cursor-pointer">
                Poadcast
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/search'} className="text-whiteColor font-semibold hover:text-black transition-all">
              <Search />
            </NavLink>
          </li>

        </ul>


        <ul className="hidden md:flex flex-row justify-center items-center gap-4 ">
          <li className="border-r-[2px] pr-3 border-blue">
            <NavLink to={'/favoris'} className="flex flex-row justify-center items-center gap-2 text-whiteColor font-semibold transition-all">
              <span className="relative hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:scale-x-75 hover:after:border-b-4 hover:after:border-colorBlue hover:after:bottom-0 hover:after:border-b-whiteColor hover:after:origin-left transition-all cursor-pointer">
                Favoris
              </span>
              <Heart />
            </NavLink>
          </li>

          <li>
            <NavLink to={'/login'} className="flex flex-row justify-center items-center gap-2 bg-whiteColor p-2 text-black font-semibold hover:text-blue hover:bg-whiteColor hover:border-[2px] hover:border-blue rounded-md transition-all">
              <span>Se connecter</span>
              <BoxArrowInRight />
            </NavLink>
          </li>



        </ul>


        <div className="md:hidden">
          {
            mobileNav ? (
              <XLg className="text-xl text-white" onClick={() => setMobileNav(!mobileNav)} />
            ) : (
              <List className="text-xl text-white" onClick={() => setMobileNav(!mobileNav)} />
            )
          }
        </div>



        <div className={`md:hidden fixed top-16 right-0 bg-blue w-0 overflow-y-scroll border border-blue ${mobileNav ? 'h-[100%] w-[80%] animate__animated animate__slideInRight' : ''}`}>

          <ul className="flex flex-col my-6 mx-6">

            <li className="mb-4">
              <NavLink to={'/search'} className="text-whiteColor font-semibold hover:text-black transition-all">
                <Search />
              </NavLink>
            </li>

            <DropDown />

            <li className="mb-4">
              <NavLink to={'/about'} className="text-whiteColor font-semibold hover:text-black transition-all">
                A propos
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink to={'/infos'} className="text-whiteColor font-semibold hover:text-black transition-all">
                Infos
              </NavLink>
            </li>


            <li className="mb-4">
              <NavLink to={'/musique'} className="text-whiteColor font-semibold hover:text-black transition-all">
                Musique
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink to={'/poadcast'} className="text-whiteColor font-semibold hover:text-black transition-all">
                Poadcast
              </NavLink>
            </li>

            <li className="border-r-[2px] pr-3 border-blue">
              <NavLink to={'/favoris'} className="flex flex-row justify-start items-center gap-2 text-whiteColor font-semibold hover:text-black mb-4 transition-all">
                <span>Favoris</span>
                <Heart />
              </NavLink>
            </li>

            <li>
              <NavLink to={'/login'} className="flex flex-row justify-start items-center gap-2 bg-whiteColor p-2 text-black font-semibold hover:text-blue hover:bg-whiteColor hover:border-[2px] mb-4 hover:border-blue rounded-md transition-all">
                <span>Se connecter</span>
                <BoxArrowInRight />
              </NavLink>
            </li>
          </ul>

          <div className="flex flex-row justify-start items-center gap-3 mx-6 my-4">
            <a href="/facebook" className="text-white font-semibold hover:text-black transition-all">
              <Facebook />
            </a>

            <a href="/twitter" target="_blank" className="text-white font-semibold hover:text-black transition-all">
              <TwitterX />
            </a>


            <a href="/instagram" target="_blank" className="text-white font-semibold hover:text-black transition-all">
              <Instagram />
            </a>


            <a href="/linkedin" target="_blank" className="text-white font-semibold hover:text-black transition-all">
              <Linkedin />
            </a>

            <a href="/spotify" target="_blank" className="text-white font-semibold hover:text-black transition-all">
              <Spotify />
            </a>
          </div>

        </div>

        <div className={`md:hidden fixed top-16 left-0 bg-blue w-0 ${mobileNav ? 'opacity-50 h-[100%] w-[20%] animate__animated animate__slideInLeft duration-500' : 'opacity-50 h-[100%] w-0'}`}>

        </div>


      </nav>
    </>
  )
}