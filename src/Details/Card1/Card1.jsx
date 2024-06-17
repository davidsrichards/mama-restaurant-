// Card1 Function

import { useContext } from "react";
import Card1Detail from "./Card1Detail/Card1Detail";
import ShopContextApi from "../../SHOP/ShopContextApi/ShopContextApi";

// Card1 Function

function Card1() {
  // getting the selected items

  const { selectedItems } = useContext(ShopContextApi);

  return (
    <>
      <div className="flex items-center lg:justify-between justify-center flex-wrap w-full  mt-[15rem] gap-6 container mx-auto p-4">
        <div className="border p-4 rounded-2xl">
          <img
            src={selectedItems.image}
            alt=""
            className="rounded-2xl w-[29rem]"
          />
        </div>

        <Card1Detail
          name={selectedItems.name}
          price={selectedItems.price}
          category={selectedItems.category}
        />
      </div>
    </>
  );
}

export default Card1;
