import { NavLink } from "react-router-dom";

export default function Donnation(){
  return(
    <>
      <div className="flex flex-col md:flex-row w-full bg-whiteColor p-11 my-6 gap-3">
        <h1 className="text-blue text-center font-semibold title-font text-4xl">Soutenir Estuaire Radio</h1>

        <div className="flex flex-col">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, provident sunt alias ut ipsa corporis molestiae autem praesentium aperiam blanditiis voluptatibus quos ea? Corporis nobis ad, alias natus quo in!
          </p>

        <div className="flex flex-row justify-center mt-4 md:justify-start items-center">
          <NavLink to={'/don'} className="bg-blue text-whiteColor p-3 rounded-md font-semibold hover:bg-purple transition-all">
            Je fais un don
          </NavLink>
        </div>

        </div>
      </div>
    </>
  )
}