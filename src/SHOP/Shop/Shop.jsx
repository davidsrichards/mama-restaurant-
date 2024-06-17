// Importing Modules

import Card9 from "../../LandingPage/Card9/Card9";
import ShopNavigation from "../ShopNavigation/ShopNavigation";
import Products from "./Products/Products";
import SideBar from "./SideBar/SideBar";
// Shop Function

function Shop({ handleInput, query, handleClick, handlePriceFunction }) {
  return (
    <>
      <ShopNavigation />
      <div className=" w-full h-screen  mt-[15rem] grid lg:grid-cols-12 bg-white">
        {/*  */}
        <div className=" col-span-3  bg-white lg:block hidden">
          <SideBar
            handleInput={handleInput}
            query={query}
            handleClick={handleClick}
            handlePriceFunction={handlePriceFunction}
          />
        </div>
        <div className="col-span-9   bg-white">
          <Products />
        </div>

        <div className=" col-span-12 bg-white">
          <Card9 />
        </div>
      </div>
    </>
  );
}

export default Shop;
