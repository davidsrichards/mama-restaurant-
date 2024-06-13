// Importing Modules

import GlobalCard6 from "./GlobalCard6/GlobalCard6";

// Card6 Function

function Card6() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col justify-items-center mt-[5rem] gap-6">
        <GlobalCard6
          image="https://mamacassng.com/wp-content/uploads/2020/10/RISSI-BISSI-RICE-BEANS-450x450.jpg"
          name="RISSI BISSI"
          price="800.00"
        />
        {/*  */}
        <GlobalCard6
          image="https://mamacassng.com/wp-content/uploads/2020/12/CHICKEN-IN-STEW.jpg"
          name="CHICKEN IN STEW"
          price="800.00"
        />
        {/*  */}
        <GlobalCard6
          image="https://mamacassng.com/wp-content/uploads/2020/12/beef-1.jpg"
          name="BEEF"
          price="900.00"
        />
        <GlobalCard6
          image="https://mamacassng.com/wp-content/uploads/2022/07/yamarita-450x450.jpg"
          name="YAMARITA"
          price="1,250.00"
        />
      </div>
    </>
  );
}

export default Card6;
