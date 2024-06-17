// Importing Modules

import NavigationBar from "../LandingPage/NavigationBar/NavigationBar";
import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card4 from "./Card4/Card4";
import Card5 from "./Card5/Card5";
import Card6 from "./Card6/Card6";
import Card7 from "./Card7/Card7";

// Detail Function

function Detail() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-white">
        <NavigationBar />

        <div className="container p-4">
          <Card1 />
          <Card2 />
          <Card4 />
          <Card5 />
          <Card6 />
        </div>
        <Card7 />
      </div>
    </>
  );
}

export default Detail;
