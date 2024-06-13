// Importing Modules
import { TbCurrencyNaira } from "react-icons/tb";

// GlobalCArd6 Function

function GlobalCard6({ image, name, price }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[20rem]">
        <img src={image} alt="" className="w-[20rem] object-cover" />

        <div className="text-[1.8rem] font-bold bg-white w-full  h-[12rem]">
          <div className="w-full flex flex-col items-center relative top-4">
            <p className="text-wrap word-break">{name}</p>
            <span className="flex items-center">
              <TbCurrencyNaira className="text-[2.5rem]" />
              <span>{price}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalCard6;
