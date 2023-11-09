import React from 'react'
import axialOne from "../../assets/map/axial1.png";
import axialTwo from "../../assets/map/axial2.png";
import axial from "../../assets/map/axial.png";

const AxialMeridian = () => {
  return (
    <div>
      <p className="pt-2 text-sm text-justify">
        ကမ္ဘာကြီးအား အကွက်ပေါင်း ၆၀ကွက် ပိုင်းခြားထားသည်။ အကွက် ၁ ကွက်လျှင် ၆
        ဒီဂရီရှိပြီး စုစုပေါင်း ၃၆၀ ဒီဂရီရှိပါသည်။ အောက်ပါပုံအတိုင်း
        အကြမ်းဖျဉ်းတွေ့မြင်နိုင်ပါသည်။
      </p>
      <img
        class=" h-60 max-h-fit mx-auto pt-4 pb-2"
        src={axialOne}
        alt="image description"
      />
      <p className=" text-center text-sm text-pink-800 pb-4">
        figure - ကမ္ဘာကြီးအား အကွက်ပေါင်း၆၀ပိုင်းထားပုံ
      </p>

      <p className=" pt-2 text-sm text-justify">
        10 deg WL တန်ဖိုးအား Axial Meridian ဖြင့် ဖော်ပြမည်ဆိုပါက ဤကဲ့သို့
        ချဉ်းကပ်ရပါသည်။ အထက်ပါပုံအရ 10 WL ဖြစ်သောကြောင့် အောက်ဆုံး ၃၀ အကွက်မှ
        စယူပြီး West ဘက်သို့သွားပါမည်။ အကွက် ၁ ကွက်လျှင် ၆ ဒီဂရီဖြစ်သောကြောင့်
        ၁၀ ဒီဂရီသည် ၂ ကွက်မြောက်တွင်ရှိနေမည်။ ထို့ကြောင့် ၂၉ ကွက် နေရာတွင် 10 WL
        ရှိနေပါမည်။ အောက်ပါပုံအတိုင်း တွေ့မြင်နိုင်ပါသည်။
      </p>
      <img
        class=" h-60 max-h-fit mx-auto pt-4 pb-2"
        src={axialTwo}
        alt="image description"
      />
      <p className=" text-center text-sm text-pink-800 pb-4">
        figure - 10 WL အား အကွက်လိုက် ဒီဂရီတန်ဖိုးချမှတ်ပုံ
      </p>
      <p className=" pt-2 text-sm text-justify">
        အထက်ပါပုံအရ 10 WL ရှိသော အကွက်အား အလယ်ဗဟိုတွင် X ဝင်ရိုး Y
        ဝင်ရိုးပိုင်းခြားလိုက်ခြင်းအားဖြင့် Axial Meridian တန်ဖိုးကို ရရှိပါသည်။
        အောက်ပါပုံအတိုင်း တွေ့မြင်ရပါမည်။
      </p>
      <img
        class=" h-60 max-h-fit mx-auto pt-4 pb-2"
        src={axial}
        alt="image description"
      />
      <p className=" text-center text-sm text-pink-800 pb-4">
        figure - 10 WL ၏  Axial Meridian
      </p>
    </div>
  );
}

export default AxialMeridian
