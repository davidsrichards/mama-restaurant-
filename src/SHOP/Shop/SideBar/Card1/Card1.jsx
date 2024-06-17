// Importing Modules

import GlobalSideBar from "../GlobalSideBar/GlobalSideBar";

// Card1 Function

function Card1({ handleClick }) {
  return (
    <>
      <div className="border container p-2 rounded-3xl mt-[3rem] mx-auto w-full ">
        <h1 className="text-2xl font-bold pb-4">Categories</h1>
        {/*  */}

        <ul
          role="list"
          className=" bg-sideColor rounded-2xl divide-y divide-dashed flex flex-col items-start justify-center container p-2 text-[1.3rem] font-normal text-slate-500 space-y-4 divide-slate-400 last:pb-4"
        >
          <GlobalSideBar
            name="BREAKFAST"
            review="(4)"
            handleButtonClick={handleClick}
            value=""
          />
          {/*  */}
          <GlobalSideBar
            name="PASTRIES"
            review="(12)"
            handleButtonClick={handleClick}
            value="PASTRIES"
          />
          {/*  */}
          <GlobalSideBar
            name="MEALS"
            review="(14)"
            handleButtonClick={handleClick}
            value="MEAL"
          />
          {/*  */}
          <GlobalSideBar
            name="SWALLOWS"
            review="(4)"
            handleButtonClick={handleClick}
            value="SWALLOW"
          />
          {/*  */}
          <GlobalSideBar
            name="SOUPS"
            review="(5)"
            handleButtonClick={handleClick}
            value="SOUP"
          />
          {/*  */}
          <GlobalSideBar
            name="PROTEINS"
            review="(15)"
            handleButtonClick={handleClick}
            value="PROTEIN"
          />
          {/*  */}
          <GlobalSideBar
            name="DRINKS"
            review="(11)"
            handleButtonClick={handleClick}
            value="DRINK"
          />
          {/*  */}
          <GlobalSideBar
            name="SIDE MEALS"
            review="(4)"
            handleButtonClick={handleClick}
            value="SIDE MEAL"
          />
          {/*  */}
          <GlobalSideBar
            name="ICE CREAM"
            review="(1)"
            handleButtonClick={handleClick}
            value="ICE CREAM"
          />
        </ul>
      </div>
    </>
  );
}

export default Card1;
