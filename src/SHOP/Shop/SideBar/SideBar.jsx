// Importing Modules

import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card4 from "./Card4/Card4";
import Card5 from "./Card5/Card5";

import SideBarInput from "./SideBarInput/SideBarInput";

// SideBar Function

function SideBar() {
  return (
    <>
      <div className="container p-4 lg:block hidden mx-auto">
        <SideBarInput />
        <Card1 />
        <Card2 />
        <Card4 />
        <Card5 />
      </div>
    </>
  );
}

export default SideBar;
