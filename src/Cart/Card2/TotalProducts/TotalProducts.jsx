// Importing Modules

import { useContext } from "react";
import ShopContextApi from "../../../SHOP/ShopContextApi/ShopContextApi";

// TotalProducts function

function TotalProducts() {
  // getting the total price and items
  const { totalPrice } = useContext(ShopContextApi);

  // getting the items length

  const { itemsLength } = useContext(ShopContextApi);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-4 text-white justify-items-start mt-[3.3rem]">
        <h1 className="text-3xl font-bold text-default">TOTAL</h1>
        <div
          className="flex w-full items-center
         justify-center border gap-2 bg-blue-400 p-4 text-[1.4rem]"
        >
          <p>Total Price: </p>
          <p className=" font-mono font-bold relative top-[1.5px] text-[1.8rem]">
            ₦{totalPrice}.00
          </p>
        </div>
        {/*  */}

        <div
          className="flex w-full items-center
         justify-center border gap- bg-blue-400 p-4 text-[1.4rem] gap-2"
        >
          <p>Total Products: </p>
          <p className=" font-mono font-bold relative top-[2px] text-[1.8rem]">
            {itemsLength}
          </p>
        </div>
      </div>
    </>
  );
}

export default TotalProducts;
