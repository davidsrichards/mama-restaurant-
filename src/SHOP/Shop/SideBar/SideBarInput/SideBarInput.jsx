function SideBarInput() {
  return (
    <>
      <div className="grid grid-cols-12 container p-0 mx-auto">
        <input
          type="text"
          placeholder="Search Products..."
          className="bg-sideColor col-span-8 py-5 text-[1.1rem] rounded-l-lg outline-none container p-4 text-slate-500"
        />
        <button className="bg-sideBtn col-span-4 outline-none rounded-lg relative right-2">
          Search
        </button>
      </div>
    </>
  );
}

export default SideBarInput;
