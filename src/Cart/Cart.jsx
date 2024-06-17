// Importing Modules

import Card9 from "../LandingPage/Card9/Card9";
import NavigationBar from "../LandingPage/NavigationBar/NavigationBar";
import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Cart2";
import CartButton from "./CartButton/Cart2Button";
import Cart9 from "../LandingPage/Card9/Card9";

// Cart Function

function Cart() {
  return (
    <>
      <div className="w-full">
        <NavigationBar />
        <div className="mt-[10rem]">
          <Card1 />
          <Card2 />
          <CartButton />
          <Cart9 />
        </div>
      </div>
    </>
  );
}

export default Cart;
