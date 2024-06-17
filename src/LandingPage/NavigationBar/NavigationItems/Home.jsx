// Home Function

import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div href="#">
        <span className="flex flex-col items-center justify-center group/item">
          <p className="w-full bg-default h-[6px] group/item invisible group-hover/item:visible"></p>
          <NavLink to="/">Home</NavLink>
        </span>
      </div>
    </>
  );
}

export default Home;
