import React from 'react'
import binary from "../../../assets/network/binary.png"

const BiConv = () => {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1 pb-4 mr-3">
      <p className=" mr-4 pt-3 text-sm text-justify tracking-wider leading-6">
        ပေးထားတဲ့ IP Address တန်ဖိုးတွေကို အလွယ်ကူဆုံးနည်းနဲ့ Binary
        တန်ဖိုးပြောင်းဖို့အတွက် အောက်ပါ ဇယားကွက်ကို အသုံးပြုနိုင်ပါတယ်။
        အောက်ပါကိန်းဂဏန်းကို အလျားလိုက်ကြည့်ရင် 1 ကနေ 128 အထိ ၈
        နေရာရှိိတာကိုတွေ့မြင်နိုင်ပါတယ်။ ဒါကဘာကိုကိုယ်စားပြုသလဲဆိုရင် Network ID တွေဟာ 1 byte (8 bits) တန်ဖိုးအတွင်းမှာ အလုပ်လုပ်တယ်ဆိုတာပါပဲ။ အဲ့ဒါကြောင့် binary ပြောင်းလျှင်လည်း 0,1 တန်ဖိုးဟာ ၈ လုံးအထိရနေမှာပါ။ယခု binary ပြောင်းနည်းစနစ်ကတော့ ဇယားကွက်ပါအတိုင်း မိမိပြောင်းလိုတဲ့ IP Address တန်ဖိုးကို အထက်ပါ 1 to 128 ကိန်းဂဏန်းတွေနဲ့ တိုက်ဆိုင်ယူရတာပါ။
        IP နံပါတ်တွေမှာ ဇယားကွက်ပါဂဏန်းတွေနဲ့ သက်ဆိုင်တဲ့တန်ဖိုးတွေ ပါဝင်ရင်အဲ့ဒီနေရာကို 1 ယူပြီး၊ မပါလျှင် အဲ့ဒီနေရာအတွက် 0 သတ်မှတ်ပြီး အဖြေထုတ်လိုက်ရုံပါပဲ။ အောက်ပါတန်ဖိုးတွေကို binary တန်ဖိုးသို့ပြောင်းကြည့်ကြမည်-
        <ul className=" font-semibold align-middle text-indigo-600 mt-2 pt-3">
          <li>254=128+64+32+16+8+4+2 = 1 + 1 + 1 + 1 +1+1+1+0 =11111110</li>
          <li>190=128+ 32+ 16+ 8+ 4+ 2 = 1 + 0 + 1 + 1+1+1+1+ 0 = 10111110</li>
          <li>108= 64 + 32+ 8+ 4 = 0 + 1+ 1+ 0 + 1+1 +0 +0 = 01101100</li>
          <li>45 =32 +8+4+1 = 0+0+1+0+1+1+0+1 = 00101101</li>
        </ul>
      </p>
      <img
        className="  mt-2 md:h-32 sm:h-20 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
        src={binary}
        alt="image description"
      />
      {/* <p className=" text-center text-sm text-pink-800 pb-4 tracking-wider leading-6">
        figure - binary format in IP Address
      </p> */}
    </div>
  );
}

export default BiConv