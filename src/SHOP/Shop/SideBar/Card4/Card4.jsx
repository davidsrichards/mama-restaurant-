// Importing Modules

import GlobalCard4 from "./GlobalCard4/GlobalCard4";

// Card4 Fuction

function Card4() {
  return (
    <div>
      <GlobalCard4
        image="https://mamacassng.com/wp-content/uploads/2023/02/mama-cass-combo-jollof-600x600.jpg"
        name="Jollof Rice + Solo drink"
        price="₦2,200.00"
      />
      {/*  */}
      <GlobalCard4
        image="https://mamacassng.com/wp-content/uploads/2023/02/mama-cass-combo-noble-rice-600x600.jpg"
        name="Noble Rice + Solo drink"
        price="₦1,750.00"
      />
      {/*  */}
      <GlobalCard4
        image="https://mamacassng.com/wp-content/uploads/2022/07/wheat-450x450.jpg"
        name="WEAT BREAD"
        price="₦850.00"
      />
    </div>
  );
}

export default Card4;
