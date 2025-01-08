import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function DropDown() {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <>
      <ul>
        <li onClick={()=>setShowDropdown(!showDropdown)} className="text-whiteColor font-semibold hover:text-black mb-4 md:mb-0 transition-all">
          <NavLink to={''} className="flex flex-row items-center gap-2">
            <span>Ville</span>

            <ChevronDown className={`${showDropdown && 'rotate-180 transition-all'}`}/>
          </NavLink>

          {showDropdown && (
            <ul className="relative md:absolute md:top-16 bg-whiteColor md:bg-blue w-auto text-black md:text-whiteColor font-semibold px-5 ">
              <li className="my-3">
                <NavLink to={''} className="hover:text-blue md:hover:text-black">
                  Douala
                </NavLink>
              </li>

              <li className="my-3">
                <NavLink to={''} className="hover:text-blue md:hover:text-black">
                  Yaoundé
                </NavLink>
              </li>


              <li className="my-3">
                <NavLink to={''} className="hover:text-blue md:hover:text-black">
                  Buéa
                </NavLink>
              </li>

              <li className="my-3">
                <NavLink to={''} className="hover:text-blue md:hover:text-black">
                  Bafoussam
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  )
}