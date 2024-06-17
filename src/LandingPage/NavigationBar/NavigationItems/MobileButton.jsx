// Importing Modules

import { IoIosMenu } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

// MobileButton Function

function MobileButton() {
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        className="absolute right-8 text-4xl bg-default py-[.7rem] px-[1rem] rounded-lg text-white lg:hidden block cursor-pointer"
        to="/shop"
      >
        {" "}
        <IoIosMenu />
      </NavLink>
    </>
  );
}

export default MobileButton;
