// Importing Modules
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ShopContextApi from "../../../../ShopContextApi/ShopContextApi";
<FaHeart />;
import { Outlet, useNavigate } from "react-router-dom";
// GobalCard Function

function GlobalCard({ name, price, image, category }) {
  const navigate = useNavigate();

  // getting the selected items from the context api

  const { setSelectedItems } = useContext(ShopContextApi);

  // Function to add the items

  const addItemsToCart = () => {
    const newItems = {
      name: name,
      price: price,
      image: image,
      category: category,
    };
    setSelectedItems(newItems);
    console.log("New Items added");
  };

  return (
    <>
      <div
        className="flex border items-center justify-center w-[16rem] rounded-2xl group/item cursor-pointer"
        onClick={() => {
          addItemsToCart();
          navigate("/shop/detail");
        }}
      >
        <div className=" ">
          <FaHeart className="text-black relative top-[2rem] sm:left-[11rem] left-[13rem] group/item group-hover/item:text-red-500" />
          <img
            src={image}
            className="sm:w-[12rem] rounded-xl cursor-pointer transition group/item group-hover/item:scale-x-110 group-hover/item:scale-y-110"
          />
          <div className="space-y-2">
            <div className="flex items-center justify-start mt-4 text-slate-400 ">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <h1 className="font-bold">{name}</h1>
            <h1 className="font-bold text-green-700">₦ {price}.00</h1>
          </div>
          <div className=" relative sm:left-[10rem] left-[12rem] -top-[1rem] bg-sideBtn p-4 border w-[3rem] h-[3rem] rounded-[1rem] ">
            <FaShoppingBasket className=" cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default GlobalCard;
