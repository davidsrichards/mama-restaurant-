import GENERALCARD from "./GENERALCARD/GENERALCARD";
import ShopContextApiProvider from "./SHOP/ShopContextApi/ShopContextApiProvider";

function App() {
  return (
    <>
      <ShopContextApiProvider>
        <GENERALCARD />
      </ShopContextApiProvider>
    </>
  );
}

export default App;
