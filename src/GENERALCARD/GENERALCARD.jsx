// Importing Modules

import { useContext, useEffect, useState } from "react";
import Detail from "../Details/Detail";
import LandingPage from "../LandingPage/LandingPage";
import Shop from "../SHOP/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import products from "../Data/Data";
import GlobalCard from "../SHOP/Shop/Products/Card2/GlobalCard/GlobalCard";
import ShopContextApiProvider from "../SHOP/ShopContextApi/ShopContextApiProvider";
import ShopContextApi from "../SHOP/ShopContextApi/ShopContextApi";
import Cart from "../Cart/Cart";

// GENERALCARD Fuction

function GENERALCARD() {
  // Deceleration of variables

  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [handlePrice, setHandlePrice] = useState("");

  // decleration of functions

  // this function handles input change

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  // this function handles option change

  const handleClick = (event) => {
    setSelectedOption(event.target.value);
  };

  // handle price function

  const handlePriceFunction = (event) => {
    setHandlePrice(event.target.value);
    console.log(event.target.value);
  };
  // filtering data from the input

  /* const filteredItem = products.filter(({ name }) => name.startsWith(query)); */
  const filteredItem = products.filter(
    (product) =>
      product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // Selected Items Function

  const selectedItem = (product, selected, query, handlePrice) => {
    let filteredProducts = product;
    if (query) {
      filteredProducts = filteredItem;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ name, price, category }) =>
          name === selected || price === selected || category === selected
      );
    }

    if (handlePrice) {
      filteredProducts = filteredProducts.filter(
        ({ price }) => price <= Number(handlePrice)
      );
    }
    return filteredProducts.map(({ name, image, price, category }) => (
      <GlobalCard
        name={name}
        price={price}
        image={image}
        category={category}
        key={Math.random()}
      />
    ));
  };

  let result = selectedItem(products, selectedOption, query, handlePrice);

  // Using the ShopContextApi

  const { setProducts } = useContext(ShopContextApi);
  //

  useEffect(() => {
    setProducts({ result });
  }, [query, selectedOption, handlePrice]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/shop"
          element={
            <Shop
              handleInput={handleInput}
              query={query}
              handleClick={handleClick}
              handlePriceFunction={handlePriceFunction}
            />
          }
        ></Route>
        <Route path="/shop/detail" element={<Detail />} />
        <Route path="/shop/detail/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default GENERALCARD;
