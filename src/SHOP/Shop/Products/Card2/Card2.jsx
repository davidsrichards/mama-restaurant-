// Importing Modules

import { useContext } from "react";
import GlobalCard from "./GlobalCard/GlobalCard";
import ShopContextApi from "../../../ShopContextApi/ShopContextApi";

// Card2 Function

function Card2() {
  // Getting The Products from the ShopApi
  const { products } = useContext(ShopContextApi);
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {products.result}
      </div>
    </>
  );
}

export default Card2;
