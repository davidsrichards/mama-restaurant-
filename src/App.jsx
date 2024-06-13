import LandingPage from "./LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Shop from "./SHOP/Shop/Shop";
import Detail from "./Details/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
