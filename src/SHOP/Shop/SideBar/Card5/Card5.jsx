// Importing Modules

import GlobalSideBar from "../GlobalSideBar/GlobalSideBar";

// Card5 Fuction

function Card5() {
  return (
    <>
      <div className="border container p-2 rounded-3xl mt-[3rem] mx-auto w-full ">
        <h1 className="text-2xl font-bold pb-4">Categories</h1>
        {/*  */}

        <ul
          role="list"
          className=" bg-sideColor rounded-2xl divide-y divide-dashed flex flex-col items-start justify-center container p-2 text-[1.3rem] font-normal text-slate-500 space-y-4 divide-slate-400 last:pb-4"
        >
          <GlobalSideBar name="BREAKFAST" review="(4)" />
          {/*  */}
          <GlobalSideBar name="Cold Drinks" review="(0)" />
          {/*  */}
          <GlobalSideBar name="DRINKS" review="(11)" />
          {/*  */}
          <GlobalSideBar name="Hot Drinks" review="(0)" />
          {/*  */}
          <GlobalSideBar name="ICE CREAM" review="(1)" />
          {/*  */}
          <GlobalSideBar name="MEALS" review="(14)" />
          {/*  */}
          <GlobalSideBar name="PASTRIES" review="(12)" />
          {/*  */}
          <GlobalSideBar name="PROTEINS" review="(15)" />
          {/*  */}
          <GlobalSideBar name="SIDE MEALS" review="(4)" />
          {/*  */}
          <GlobalSideBar name="SOUPS" review="(5)" />
          {/*  */}
          <GlobalSideBar name="SWALLOWS" review="(4)" />
        </ul>
      </div>
    </>
  );
}

export default Card5;
