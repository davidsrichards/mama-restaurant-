// Importing Modules

import { LuArrowRight } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

// Button Function

function Button() {
  const navigate = useNavigate();

  return (
    <>
      <NavLink
        to="/shop"
        className="bg-default py-1 px-8 rounded-lg hover:bg-transparent text-white hover:text-default transition delay-50 absolute right-5 lg:block hidden"
      >
        <button>
          <div className="flex items-center space-x-6">
            <span className=" bg-default p-[0px] rounded-full border ring-[1.5px] ring-white text-white">
              <LuArrowRight className="  text-2xl font-bold" />
            </span>
            <span className="font-bold text-[1.6rem] -space-y-2 ">
              <p>ORDER</p>
              <p>ONLINE</p>
            </span>
          </div>
        </button>
      </NavLink>
    </>
  );
}

export default Button;
