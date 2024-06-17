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
import { useContext, useState } from "react";
import ShopContextApi from "../../../SHOP/ShopContextApi/ShopContextApi";
import { NavLink, useNavigate } from "react-router-dom";

// Card1Detail Function

function Card1Detail({ name, price, category }) {
  const [count, setCount] = useState(1);

  // Function to increament count

  const handleCount = (option) => {
    switch (option) {
      case "+":
        return count < 10 && setCount((c) => c + 1);
      case "-":
        return count > 0 && setCount((c) => c - 1);
      default:
        return setCount(count);
    }
  };

  // using the image from items api

  const { selectedItems } = useContext(ShopContextApi);

  // Using the carItems Api

  const { setCartItems } = useContext(ShopContextApi);

  // getting total price api

  const { setTotalPrice } = useContext(ShopContextApi);

  // total price function

  const totalItems = (newPrice) => {
    setTotalPrice((prev) => prev + newPrice);
  };

  // getting the items length api

  const { itemsLength, setItemsLength } = useContext(ShopContextApi);

  // item length function

  const itemsLengthFun = () => {
    setItemsLength((prev) => prev + 1);
  };

  // function to add items

  const addingItemsToCart = () => {
    // new items
    let newPrice = 0;

    price = Number(price);

    const newItems = {
      cartName: name,
      cartPrice: price,
      cartCategory: category,
      carImage: selectedItems.image,
    };

    setCartItems((oldItems) => [...oldItems, newItems]);
    newPrice += price;

    // total price
    totalItems(newPrice);

    // items length

    itemsLengthFun();

    // getting the price and total items
  };

  return (
    <>
      <div className="flex flex-col items-start justify-center lg:w-1/2 w-full   ">
        <div className="w-full">
          <h1 className="text-[1.8rem] font-bold">{name}</h1>
          <h1 className="text-[1.6rem] font-bold text-green-700 border-b-2 pb-4">
            ₦{price}.00
          </h1>
        </div>
        <ul role="list" className=" w-full divide-y-2 space-y-6">
          <li className="flex items-center justify-between w-full  space-x-8 mt-4">
            <span className="flex items-center justify-center space-x-4">
              <p className="bg-yellow-200 rounded-full w-[1.5rem] text-center font-extrabold hover:text-default cursor-pointer">
                <button onClick={() => handleCount("-")}>-</button>
              </p>
              <p className="font-bold">{count}</p>
              <p className="bg-yellow-200 rounded-full w-[1.5rem] text-center font-extrabold hover:text-default cursor-pointer">
                <button onClick={() => handleCount("+")}>+</button>
              </p>
            </span>
            <button
              className="flex items-center justify-center bg-yellow-200 w-full rounded-lg p-3 space-x-2 hover:text-white"
              onClick={() => {
                addingItemsToCart();
                alert(`${itemsLength + 1} Itmes added to Cart`);
              }}
            >
              <FaShoppingBasket />
              <span className="font-bold text-[0.8rem]">ADD TO CART</span>
            </button>
            <div className="bg-neutral-100 p-4 rounded-lg hover:text-default cursor-pointer text-slate-400 sm:block hidden">
              <NavLink to="/shop/detail/cart">
                {" "}
                <FaHeart />
              </NavLink>
            </div>
          </li>
          {/*  */}
          <li className="flex flex-col items-start justify-center text-slate-500">
            <div className=" mt-6">
              <span className="text-[0.9rem]">Category: </span>
              <span className="text-[0.9rem]">{category}</span>
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
          <li className="flex items-center justify-start gap-4 sm:flex-nowrap flex-wrap">
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
