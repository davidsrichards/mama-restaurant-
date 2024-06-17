// Importing Modules

import { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";

// Card2 Function

function Card2({ handlePriceFunction }) {
  const [inputPrice, setInputPrice] = useState(50);
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-[3rem] space-y-5">
        <h1 className=" text-[1.2rem] font-bold border-b-2 border-dashed w-full pb-3">
          Filter by price
        </h1>
        <input
          type="range"
          name=""
          id=""
          className="w-full accent-default"
          max={8000}
          min={50}
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <div className="flex items-center justify-center  text-[1rem] text-slate-500 space-x-1">
          <span>price: </span>
          <div className="flex items-center justify-center">
            <TbCurrencyNaira className="text-[1.3rem]" />
            <span className="text-[1rem]">50.00</span>
          </div>
          <span>-</span>
          <div className="flex items-center justify-center">
            <TbCurrencyNaira className="text-[1.3rem]" />
            <span className="text-[1rem]">{inputPrice}.00</span>
          </div>
        </div>
        <button
          className="bg-yellow-200 text-[0.8rem]  font-bold p-1 px-3 rounded-lg hover:text-white "
          value={inputPrice}
          onClick={handlePriceFunction}
        >
          FILTER
        </button>
        <h1 className=" border-b-2 border-dashed pb-3 w-full text-[1.2rem]  font-bold">
          Best Deals
        </h1>
      </div>
    </>
  );
}

export default Card2;
