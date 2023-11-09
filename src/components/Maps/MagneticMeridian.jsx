import React from 'react'
import magneticMeridian from "../../assets/map/Magnetic.png";

const MagneticMeridian = () => {
  return (
    <div>
      <p className="pt-2 text-sm text-justify">
        သံလိုက်အိမ်မြှောင်ညွှန်ပြသော တောင်နှင့်မြောက်
        ဝင်ရိုးစွန်းနှစ်ခုသွယ်တန်းထားသောမျဉ်းကို Magnetic Meridian ဟုခေါ်ပါသည်။
        Magnetic Meridian မျဉ်းနှင့် Latitude မျဉ်းကြားရှိ ထောင့်ကို Bearing of
        Magnetic Meridian ဟု ခေါ်ပါသည်။
      </p>
      <img
        class=" h-72 max-h-fit mx-auto pt-4 pb-2"
        src={magneticMeridian}
        alt="image description"
      />
      <p className=" text-center text-sm text-pink-800 pb-4">
        figure - Magnetic Meridian
      </p>
    </div>
  );
}

export default MagneticMeridian
