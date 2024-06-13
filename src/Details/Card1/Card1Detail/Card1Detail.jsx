// Importing Modules
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";

import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

import { FaGooglePlus } from "react-icons/fa";

import { FaPinterestP } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

// Card1Detail Function

function Card1Detail() {
  return (
    <>
      <div className="flex flex-col items-start justify-center   ">
        <div className="w-full">
          <h1 className="text-[1.8rem] font-bold">AMALA</h1>
          <h1 className="text-[1.6rem] font-bold text-green-700 border-b-2 pb-4">
            ₦350.00
          </h1>
        </div>
        <ul role="list" className=" w-full divide-y-2 space-y-6">
          <li className="flex items-center justify-between w-full  space-x-8 mt-4">
            <span className="flex items-center justify-center space-x-4">
              <p className="bg-yellow-200 rounded-full w-[1.5rem] text-center font-extrabold hover:text-default cursor-pointer">
                -
              </p>
              <p className="font-bold">1</p>
              <p className="bg-yellow-200 rounded-full w-[1.5rem] text-center font-extrabold hover:text-default cursor-pointer">
                +
              </p>
            </span>
            <button className="flex items-center justify-center bg-yellow-200 w-full rounded-lg p-3 space-x-2 hover:text-white">
              <FaShoppingBasket />
              <span className="font-bold text-[0.8rem]">ADD TO CART</span>
            </button>
            <div className="bg-neutral-100 p-4 rounded-lg hover:text-default cursor-pointer text-slate-400">
              <FaHeart />
            </div>
          </li>
          {/*  */}
          <li className="flex flex-col items-start justify-center text-slate-500">
            <div className=" mt-6">
              <span className="text-[0.9rem]">Category: </span>
              <span className="text-[0.9rem]">SWALLOWS</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>Share: </span>
              <BiLogoFacebookSquare className="hover:text-default cursor-pointer" />
              <FaTwitter className="hover:text-default cursor-pointer" />
              <FaLinkedin className="hover:text-default cursor-pointer" />
              <FaGooglePlus className="hover:text-default cursor-pointer" />
              <FaPinterestP className="hover:text-default cursor-pointer" />
              <CiMail className="hover:text-default cursor-pointer" />
            </div>
          </li>
          {/*  */}
          <ul className="text-[1rem] text-slate-400">
            <div className="flex items-center space-x-2 mt-5">
              <GoDotFill />
              <li className="">Free global shipping on all orders</li>
            </div>

            <div className="flex items-center space-x-2">
              <GoDotFill />
              <li>30 days easy returns if you change your mind</li>
            </div>
            <div className="flex items-center space-x-2">
              <GoDotFill />
              <li>Order before noon for same day dispatch </li>
            </div>
          </ul>
          <li className="flex items-center justify-start space-x-5">
            <h2 className="mt-5 font-bold">Guaranteed Safe Checkout</h2>
            <img
              src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/trust-symbols.png"
              alt=""
              className="mt-5"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card1Detail;
