import React from 'react'
import binary from "../../assets/number/binary.png";

const BinaryNumber = () => {
  return (
    <div>
      <p className=" flex pr-2 pt-3 text-sm text-justify">
        Binary number system သည် 0 နှင့်1 ကို အခြေပြုထားသော number system
        ဖြစ်သောကြောင့် base 2 Number system ဟု ခေါ်ပါသည်။ Binary number စနစ်တွင်
        ကိန်းဂဏန်းတစ်ခု၏ ပေါင်းလဒ်တစ်ခုချင်းစီကို 2 နှင့် မြောက်ပေးရသည်။
        ထို့ကြောင့် 0 ကနေ 10 အထိ binary တန်ဖိုးအား ရေတွက်ရလျှင် 512, 256,
        128,64, 32, 16, 8, 4, 2, 1 ဖြစ်ပါသည်။
      </p>
      <div className="">
        <img
          class=" mt-2 h-60 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={binary}
          alt="image description"
        />
        <p className=" mt-2 text-center text-sm text-pink-800">
          figure- Binary Number
        </p>
      </div>
    </div>
  );
}

export default BinaryNumber;