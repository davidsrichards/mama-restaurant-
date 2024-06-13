// Importing Modules

import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card4 from "./Card4/Card4";
import GlobalCard4 from "./Card4/GlobalCard4/GlobalCard4";
import Card5 from "./Card5/Card5";
import Card6 from "./Card6/Card6";
import Card7 from "./Card7/Card7";
import Card8 from "./Card8/Card8";
import Card9 from "./Card9/Card9";
import NavigationBar from "./NavigationBar/NavigationBar";

// Navigation Bar Function

function LandingPage() {
  return (
    <>
      <div className="mx-auto">
        <NavigationBar />

        <Card1 />

        <Card2 />

        <Card4 />

        <Card5 />

        <Card6 />

        <Card7 />

        <Card8 />

        <Card9 />
      </div>
    </>
  );
}

export default LandingPage;
