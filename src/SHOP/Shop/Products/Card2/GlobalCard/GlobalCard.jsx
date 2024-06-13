// Importing Modules
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
<FaHeart />;
// GobalCard Function

function GlobalCard() {
  return (
    <>
      <div className="flex border items-center justify-center w-[16rem] rounded-2xl group/item cursor-pointer">
        <div className=" ">
          <FaHeart className="text-black relative top-[2rem] left-[10rem] group/item group-hover/item:text-red-500" />
          <img
            src="https://mamacassng.com/wp-content/uploads/2020/10/RISSI-BISSI-RICE-BEANS-450x450.jpg"
            className="w-[12rem] rounded-xl cursor-pointer transition group/item group-hover/item:scale-x-110 group-hover/item:scale-y-110"
          />
          <div className="space-y-2">
            <div className="flex items-center justify-start mt-4 text-slate-400 ">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <h1 className="font-bold">RISSI BISSI</h1>
            <h1 className="font-bold text-green-700">₦1,150.00</h1>
          </div>
          <div className=" relative left-[10rem] -top-[1rem] bg-sideBtn p-4 border w-[3rem] h-[3rem] rounded-[1rem]">
            <FaShoppingBasket className=" cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalCard;
