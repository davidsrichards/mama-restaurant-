// Importing Modules

import { useState } from "react";
import { SiWindows11 } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";

// Card1 Function

function Card1() {
  const [filter, setFilter] = useState([
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    ,
    "Sort by latest",
    "Sort by price: low to high",
    ,
    "Sort by price: high to low",
  ]);
  return (
    <>
      <div className="flex items-center justify-around container p-8 -mt-5 mx-auto ">
        <p className="text-slate-500">Showing all 75 results</p>
        <div className="flex items-center justify-center space-x-4 ">
          <SiWindows11 className="lg:visible invisible hover:cursor-pointer" />
          <TfiMenuAlt className="lg:visible invisible hover:cursor-pointer hover:text-slate-700  text-slate-400" />

          <div className="flex items-center container p-4 bg-sideColor rounded-lg mx-auto">
            <select
              name=""
              id=""
              className=" bg-sideColor container  p-0 outline-none"
            >
              {filter.map((item) => (
                <option value="" key={Math.random()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
