// GlobalSideBar Function

function GlobalSideBar({ name, review, handleButtonClick, value }) {
  return (
    <>
      <li className="group/item flex items-center justify-between w-full cursor-pointer">
        <span className="group/item group-hover/item:text-yellow-500">
          <button onClick={handleButtonClick} value={value}>
            {name}
          </button>
        </span>
        <span>{review}</span>
      </li>
    </>
  );
}

export default GlobalSideBar;
