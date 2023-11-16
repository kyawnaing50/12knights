import React from 'react'
import hexa from "../../assets/number/hexa.png"

const HexaDecimal = () => {
  return (
    <div className="pt-3 grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
      <p className="pt-2 text-sm text-justify tracking-wider leading-6">
        Hexadecimal number ဟာ 0 to 15 ပါဝင်တဲ့ Base-16 number စနစ်တစ်ဖြစ်ပါတယ်။
        အဲ့ဒီ 0 ကနေ 15 ကိန်းဂဏန်းတန်ဖိုးတွေကို 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
        စသည်တိုနဲ့ ဖော်ပြသတ်မှတ်ပါတယ်။ ရည်ရွယ်ချက်ကတော့ အရွယ်အစားကြီးမားတဲ့
        String size တွေကို လျှော့ချစေဖို့ဖြစ်ပါတယ်။ ဥပမာ- 12 =C, 29=1D,27=1B.
      </p>
      <div className="">
        <img
          class=" mt-2 h-32 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={hexa}
          alt="image description"
        />
        {/* <p className=" mt-2 text-center text-sm text-pink-800 pb-5">
          figure- Hexa Number
        </p> */}
      </div>
    </div>
  );
}

export default HexaDecimal
