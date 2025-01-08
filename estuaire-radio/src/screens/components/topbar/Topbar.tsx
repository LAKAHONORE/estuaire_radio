import { Facebook, Instagram, Linkedin, Spotify, TwitterX } from "react-bootstrap-icons";

export default function Topbar(){
  return(
    <>
      <div className="hidden md:flex flex-row w-full h-8 top-0 sticky z-50 justify-between items-center bg-whiteColor px-80">


        <div className="flex flex-row justify-center items-center gap-3">
          <a href="/facebook" target="_blank" className="text-black font-semibold hover:text-blue transition-all">
            <Facebook />
          </a>

          <a href="/twitter" target="_blank" className="text-black font-semibold hover:text-blue transition-all">
            <TwitterX />
          </a>


          <a href="/instagram" target="_blank" className="text-black font-semibold hover:text-blue transition-all">
            <Instagram />
          </a>


          <a href="/linkedin" target="_blank" className="text-black font-semibold hover:text-blue transition-all">
            <Linkedin />
          </a>

          <a href="/spotify" target="_blank" className="text-black font-semibold hover:text-blue transition-all">
            <Spotify />
          </a>
        </div>
      </div>
    </>
  )
}