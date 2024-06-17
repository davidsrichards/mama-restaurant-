// Importing Modules

// Cart2Details Function

function Cardt2Detail() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-start justify-center mt-[3rem]">
        <label>
          Your location <span>*</span>
        </label>
        <textarea className="outline-none w-full pb-[10rem] ring-1 ring-slate-200 rounded-lg focus:ring-default container p-4" />
      </div>
      <div className="mt-4 w-full flex gap-4 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col items-start w-full">
          <label>
            Name <span className="text-default">*</span>
          </label>
          <input
            type="text"
            className="outline-none ring-1 ring-slate-200 rounded-sm focus:ring-default w-full h-[2.5rem] container p-4"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label>
            Phone <span className="text-default">*</span>
          </label>
          <input
            type="number"
            className="outline-none ring-1 ring-slate-200 rounded-sm focus:ring-default w-full h-[2.5rem] container p-4"
          />
        </div>
      </div>
      <div className="mt-[3rem] flex items-center justify-start space-x-2">
        <input
          type="checkbox"
          className="p-4 w-[1rem] h-[1rem] accent-blue-400"
        />
        <span>
          Save my name, phone, and website in this browser for the next time I
          comment.
        </span>
      </div>
    </>
  );
}

export default Cardt2Detail;
