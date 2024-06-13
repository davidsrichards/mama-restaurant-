// Importing Modules

// CAard4 Input Function

function Card4Input() {
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-[3rem]">
        <label>
          Your review <span>*</span>
        </label>
        <textarea className="outline-none w-full pb-[10rem] ring-1 ring-slate-200 rounded-lg focus:ring-default container p-4" />
      </div>
      <div className="flex items-center  mt-4 space-x-4 w-full">
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
            Email <span className="text-default">*</span>
          </label>
          <input
            type="email"
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
          Save my name, email, and website in this browser for the next time I
          comment.
        </span>
      </div>
      <button className="mt-4 bg-sideBtn w-[9rem] h-[3rem] flex items-center justify-center font-bold text-[1.3rem] rounded-lg hover:text-white">
        Submit
      </button>
    </>
  );
}

export default Card4Input;
