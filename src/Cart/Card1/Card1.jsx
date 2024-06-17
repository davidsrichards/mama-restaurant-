// Importing Modules

import { useContext, useEffect } from "react";
import Card1Detail from "./Card1Detail/Card1Detail";
import ShopContextApi from "../../SHOP/ShopContextApi/ShopContextApi";

// Card1 Function

function Card1() {
  // getting the cart items api

  const { cartItems } = useContext(ShopContextApi);

  return (
    <>
      {cartItems.map(({ cartName, carImage, cartPrice, cartCategory }) => (
        <div
          className="flex items-center lg:justify-between justify-center flex-wrap w-full  mt-[10rem] gap-6 container mx-auto p-4"
          key={Math.random()}
        >
          <div className="border p-4 rounded-2xl">
            {" "}
            <img src={carImage} alt="" className="w-[29rem] rounded-2xl" />
          </div>

          <Card1Detail
            name={cartName}
            price={cartPrice}
            category={cartCategory}
          />
        </div>
      ))}
    </>
  );
}

export default Card1;
