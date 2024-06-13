// Importing Modules

import { IoIosMenu } from "react-icons/io";

// MobileButton Function

function MobileButton() {
  return (
    <>
      <div className="absolute right-8 text-4xl bg-default py-[.7rem] px-[1rem] rounded-lg text-white lg:hidden block cursor-pointer">
        <IoIosMenu />
      </div>
    </>
  );
}

export default MobileButton;
