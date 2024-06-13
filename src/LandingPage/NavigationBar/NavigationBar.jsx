// Importing Modules

import image from "../../assets/MamaCassaImages/logo-mamacass.png";
import About from "./NavigationItems/About";
import Contact from "./NavigationItems/Contact";
import Home from "./NavigationItems/Home";
import Menu from "./NavigationItems/Menu";
import MobileButton from "./NavigationItems/MobileButton";
import Button from "./NavigationItems/NavButton";
import Social from "./NavigationItems/SocialMedia";
import SuperCombo from "./NavigationItems/SuperCombo";

// NavigationBar Function

function NavigationBar() {
  return (
    <>
      <nav className=" fixed top-0 min-w-full container p-8 flex items-center justify-around bg-white z-50 border">
        <img src={image} alt="" className="w-[6rem] cursor-pointer" />
        <MobileButton />
        <div className="w-ful  flex items-center justify-center space-x-10 text-[1.6rem] font-bold text-default lg:visible invisible">
          <Home />
          <About />
          <Menu />
          <SuperCombo />
          <Contact />
        </div>
        {/*  */}
        <div className="flex items-center justify-center space-x-6 lg:visible invisible">
          <Social />
          <Button />
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
