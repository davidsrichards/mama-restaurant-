// Importing Modules

import { useState } from "react";
import ShopContextApi from "./ShopContextApi";

// ShopContextApi Provider

const ShopContextApiProvider = ({ children }) => {
  // proudcts

  const [products, setProducts] = useState("");

  // selected detail items

  const [selectedItems, setSelectedItems] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  // cart items

  const [cartItems, setCartItems] = useState([]);

  // total price

  const [totalPrice, setTotalPrice] = useState(0);

  // number of items in the cart

  const [itemsLength, setItemsLength] = useState(0);

  return (
    <ShopContextApi.Provider
      value={{
        // products
        products,
        setProducts,

        // selectedItmes

        selectedItems,
        setSelectedItems,

        // cart items

        cartItems,
        setCartItems,

        // total price

        totalPrice,
        setTotalPrice,

        // items length

        itemsLength,
        setItemsLength,
      }}
    >
      {children}
    </ShopContextApi.Provider>
  );
};

// Exporting Modules

export default ShopContextApiProvider;
