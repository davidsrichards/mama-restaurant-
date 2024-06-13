// Importing Modules

import { FaWhatsapp } from "react-icons/fa";
<FaWhatsapp />;

// GlobalCard4 Function

function GlobalCard4({ icon, first, second, third, comma }) {
  return (
    <>
      <button className="flex items-center justify-center space-x-2 outline-dotted text-default lg:py-6 py-10 px-12 outline-neutral-300 hover:outline-yellow-400 rounded-lg lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-3">
        <span className="hover:text-green-500 transition delay-100 hover:scale-x-125 hover:scale-y-125">
          {icon}
        </span>
        <div className="flex flex-col lg:items-start justify-center -space-y-1 items-center">
          <h1 className="text-[1.6rem] font-bold">
            {first}
            {comma}{" "}
          </h1>
          <h1 className="text-[1.6rem] font-bold">{second}</h1>

          <p className=" font-extrabold text-white text-[1.4rem]">{third}</p>
        </div>
      </button>
    </>
  );
}

export default GlobalCard4;
