import React from 'react'
import trueMeridian from "../../assets/map/t-meridian.png";

const TrueMeridian = () => {
  return (
    <div className="pt-3 grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
      <p className="pt-2 text-sm text-justify tracking-wider leading-6">
        ကမ္ဘာကြီး၏
        မြောက်ဝင်ရိုးစွန်းနှင့်တောင်ဝင်ရိုးစွန်းနှစ်ခုကိုဆက်သွယ်ထားသော Longitude
        မျဉ်းနှင့် အရှေ့နှင့်အနောက်ကို ဆက်သွယ်ထားသော Latitude မျဉ်းတို့
        တွေ့ဆုံတော့ အမှတ်ကို True meridian ဟု ခေါ်ပါသည်။ True Meridian ကို
        geographical meridian ဟုလည်း ခေါ်ပါသည်။ True Meridian နှင့် Latitude
        မျဉ်းဆုံပြီးဖြစ်ပေါ်လာသော ထောင့်ကို true bearing ဟု ခေါ်သည်။
      </p>
      <img
        class=" h-60 max-h-fit mx-auto pt-4 pb-2"
        src={trueMeridian}
        alt="image description"
      />
      {/* <p className=" text-center text-sm text-pink-800 pb-4">
        figure - True Meridian
      </p> */}
    </div>
  );
}

export default TrueMeridian
