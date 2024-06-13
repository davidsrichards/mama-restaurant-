// Importing Modules
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
<BsFillTelephoneFill />;
import { CiDeliveryTruck } from "react-icons/ci";
import GlobalCard4 from "./GlobalCard4/GlobalCard4";
<CiDeliveryTruck />;

// Card4 Function

function Card4() {
  return (
    <>
      <div className=" lg:-mt-[65rem] grid lg:grid-cols-3 w-full container mx-auto gap-10 mt-[5rem] grid-cols-1 lg:p-0 p-4 ">
        <GlobalCard4
          icon={<FaWhatsapp className="text-[6rem]" />}
          first="ORDER"
          second="VIA WHATSAPP"
          third="Click"
        />
        {/*  */}
        <GlobalCard4
          icon={<BsFillTelephoneFill className="text-[6rem]" />}
          first="09068842993"
          comma=","
          second="08158503750"
        />
        {/*  */}
        <GlobalCard4
          icon={<CiDeliveryTruck className="text-[6rem]" />}
          first="Super Combo"
          second="Promo!!!"
        />
      </div>
    </>
  );
}

export default Card4;
