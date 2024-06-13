// Importing Modules

import { SiWindows11 } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";

// Card1 Function

function Card1() {
  return (
    <>
      <div className="flex items-center justify-around container p-8 -mt-5 mx-auto ">
        <p className="text-slate-500">Showing all 75 results</p>
        <div className="flex items-center justify-center space-x-4 ">
          <SiWindows11 className="lg:visible invisible" />
          <TfiMenuAlt className="lg:visible invisible" />

          <div className="flex items-center container p-4 bg-sideColor rounded-lg mx-auto">
            <select name="" id="" className=" bg-sideColor container  p-0">
              <option value="">Sort by popularity</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
