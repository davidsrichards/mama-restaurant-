// Importing Modules

import { FaFacebookF } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
<MdOutlineFacebook />;

import { CiTwitter } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
<AiFillTwitterCircle />;

import { FaInstagram } from "react-icons/fa";

// Social Function

function Social() {
  return (
    <>
      <div className="flex items-center gap-2 text-white justify-center relative top-1 xl:visible invisible">
        <a
          href="#"
          className=" bg-default p-1 rounded-full flex items-center justify-center"
        >
          {<MdOutlineFacebook className=" rounded-full" />}
        </a>
        <a
          href="#"
          className=" bg-default p-1 rounded-full flex items-center justify-center"
        >
          {<AiFillTwitterCircle className="" />}
        </a>
        <a
          href="#"
          className=" bg-default p-1 rounded-full flex items-center justify-center"
        >
          {<FaInstagram />}
        </a>
      </div>
    </>
  );
}

export default Social;
