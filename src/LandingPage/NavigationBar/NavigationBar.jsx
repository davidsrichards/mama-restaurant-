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
      <nav className=" fixed top-0 min-w-full container p-8 flex items-center justify-around bg-white z-50 border h-[8rem]">
        <img
          src={image}
          alt=""
          className="w-[6rem] cursor-pointer absolute left-8"
        />
        <MobileButton />
        <div className="text-[1.3rem] font-bold text-default lg:block hidden">
          <div className="flex gap-8 relative right-8">
            <div className="flex gap-10">
              <Home />
              <About />
              <Menu />
              <SuperCombo />
              <Contact />
            </div>
            <Social />
          </div>
        </div>
        {/*  */}

        <Button />
      </nav>
    </>
  );
}

export default NavigationBar;
