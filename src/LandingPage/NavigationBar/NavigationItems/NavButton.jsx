// Importing Modules

import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

// Button Function

function Button() {
  const navigate = useNavigate();

  return (
    <>
      <button
        className=" bg-default py-3 px-8 rounded-lg hover:bg-transparent text-white hover:text-default transition delay-50"
        onClick={() => navigate("shop")}
      >
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
    </>
  );
}

export default Button;
