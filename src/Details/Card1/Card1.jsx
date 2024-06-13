// Card1 Function

import Card1Detail from "./Card1Detail/Card1Detail";

// Card1 Function

function Card1() {
  return (
    <>
      <div className="flex items-center lg:justify-between justify-center flex-wrap w-full  mt-[15rem] gap-6 container mx-auto p-4">
        <div className="border p-4 rounded-2xl">
          <img
            src="https://mamacassng.com/wp-content/uploads/2020/10/RISSI-BISSI-RICE-BEANS-450x450.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>

        <Card1Detail />
      </div>
    </>
  );
}

export default Card1;
