// Importing Modules
import { CiStar } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";

// GlobalCard4 Function

function GlobalCard4({ image, name, price }) {
  return (
    <>
      <div className="flex items-center justify-start space-x-4 mt-[3rem] border p-2 rounded-2xl">
        <img
          src={image}
          alt="image"
          className="w-[6rem] rounded-2xl cursor-pointer"
        />
        <div>
          <span className="flex items-center justify-start">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
          <p className=" font-bold hover:text-yellow-500 cursor-pointer">
            {name}
          </p>
          <h1 className="font-bold text-2xl text-default">{price}</h1>
        </div>
      </div>
    </>
  );
}

export default GlobalCard4;
