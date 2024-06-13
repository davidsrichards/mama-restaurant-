// GlobalSideBar Function

function GlobalSideBar({ name, review }) {
  return (
    <>
      <li className=" flex items-center justify-between w-full cursor-pointer">
        <span className="hover:text-yellow-500">{name}</span>
        <span>{review}</span>
      </li>
    </>
  );
}

export default GlobalSideBar;
