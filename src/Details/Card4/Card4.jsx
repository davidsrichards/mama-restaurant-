// Importing Modules
import { FaStar } from "react-icons/fa6";
import Card4Input from "./Card4Input/Card4Input";

// Card4 Function

function Card4() {
  return (
    <>
      <div className="grid lg:grid-cols-2 w-full gap-4 mt-[3rem]">
        <div className="w-full bg-blue-400 text-white container mx-auto p-4 rounded-sm flex items-center h-[4rem]">
          There are no reviews yet.
        </div>

        <div className="w-full ">
          <p className="pb-4">
            Your email address will not be published. Required fields are marked
            <span className="text-default">*</span>
          </p>
          <p className="pb-2">
            Your rating <span className="text-default">*</span>
          </p>
          <div className="flex items-start space-x-2 text-slate-400">
            <FaStar className="hover:text-default cursor-pointer" />
            <FaStar className="hover:text-default cursor-pointer" />
            <FaStar className="hover:text-default cursor-pointer" />
            <FaStar className="hover:text-default cursor-pointer" />
            <FaStar className="hover:text-default cursor-pointer" />
          </div>

          <Card4Input />
        </div>
      </div>
    </>
  );
}

export default Card4;
