// Importing Modules

import Cardt2Detail from "./Cart2Detail/Cart2Detail";
import TotalProducts from "./TotalProducts/TotalProducts";

// Card2 Function

function Card2() {
  return (
    <>
      <div className="grid lg:grid-cols-2 justify-items-center grid-cols-1 container p-4 mx-auto">
        <TotalProducts />
        <div className=" lg:col-start-2">
          <Cardt2Detail />
        </div>
      </div>
    </>
  );
}

export default Card2;
