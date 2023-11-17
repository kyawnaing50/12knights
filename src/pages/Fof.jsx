import React from 'react'
import Title from '../components/Title'
import iff from "../assets/Iff/iff.png";
import AutherComponet from '../components/AutherComponet';
import kn from "../assets/auther/kyawnaing.png"
import KZH from "../assets/auther/KZH.png"
import NLH from "../assets/auther/NLH.png" 
import lwin from "../assets/auther/lwin.jpg"


const Fof = () => {
  return (
    <div>
      <Title title="SSR and IFF Modes" />
      <img
        class=" h-96 max-h-fit mx-auto pt-6 pb-2 rounded-xl"
        src={iff}
        alt="image description"
      />
      <p className=" text-center text-sm text-pink-800 pb-4">
        figure - SSR နှင့် IFF တွင် အသုံးပြုလျက်ရှိသော Modes များ
      </p>

      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="A" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-7">
          Mode A ကို SSR code (Squawk Code ) လို့လည်းခေါ်တယ်။ Mode A ဟာ
          အရပ်ဘက်သုံးဖြစ်ပြီးတော့ စစ်ဘက်သုံး Mode-3 နဲ့ အတူတူပဲဖြစ်တယ်။ စံပြု
          Frequency ကတော့ အမေးစနစ်အတွက် 1030 MHz ဖြစ်ပြီးတော့ အဖြေစနစ်အတွက် 1090
          MHz ကို အသုံးပြုထားတယ်။ ဒီ Mode A ဟာ လေယာဉ်ရဲ့
          အမြင့်ကိုတိုင်းတာဖော်ပြနိုင်တဲ့ Mode C နဲ့ တွဲဘက်အသုံးပြုလေ့ရှိတယ်။
          လျှို့ဝှက်သင်္ကေတပေါင်း ၄၀၉၆ ခု ရှိပြီးတော့ ထမ်းဆောင်ရမည့်
          တာဝန်များကိုတော့ ATC မှ သတ်မှတ်ပေးတာဖြစ်ပါတယ်။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="B" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-7">
          အပြည်ပြည်ဆိုင်ရာလေကြောင်းလိုင်းများရဲ့ ATC အတွက် အသုံးပြုရတဲ့
          အရပ်ဘက်သုံး Mode ဖြစ်ပါတယ်။ အရင်က အရန်နည်းလမ်းအနေနဲ့အသုံးပြုခဲ့ကြပေမဲ့
          ကန့်သတ်ချက်တွေ ရှိနေတာကြောင့် အခုတော့ မသုံးကြတော့ဘူး။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="C" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-7">
          အပြည်ပြည်ဆိုင်ရာလေကြောင်းလိုင်းများရဲ့ ATC အတွက် အသုံးပြုရတဲ့
          အရပ်ဘက်သုံး Mode ဖြစ်ပါတယ်။ အရင်က အရန်နည်းလမ်းအနေနဲ့အသုံးပြုခဲ့ကြပေမဲ့
          ကန့်သတ်ချက်တွေ ရှိနေတာကြောင့် အခုတော့ မသုံးကြတော့ဘူး။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="D" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-7">
          ဒီ Mode D ကိုတော့ အနာဂတ်အတွက် ရည်ရွယ်သတ်မှတ်ထားတာဖြစ်ပါတယ်။ ဒါပေမဲ့
          ကန့်သတ်ချက်တချို့ကြောင့် ယခုအချိန်ထိ အသုံးပြုခြင်းမရှိသေးပါဘူး။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="S" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          Mode S ဟာ IFF modes တွေအထဲ အဆင့်အမြင့်ဆုံးနည်းလမ်းဖြစ်ပါတယ်။
          မြေပြင်ထိန်ချုပ်ရေးစခန်းနဲ့ လေယာဉ်ပိုင်းလော့တို့ကြားမှာ
          ရင်ဆိုင်ရတဲ့အခက်အခဲအတော်များများကို ကူညီဖြေရှင်းလျှော့ချ
          ပေးနိုင်တာမို့ စစ်ဘက်ရော့ အရပ်ဘက်မှာပါ အသုံးများပါတယ်။ စံပြု Frequency
          ကတော့ အမေးစနစ်အတွက် 1030 MHz နဲ့ အဖြေစနစ်အတွက် 1090 MHz တို့ကို
          သုံးစွဲထားပါတယ်။ Mode S အသုံးပြုရင် လေယာဉ်ရဲ့ အမြင့်ပေ၊ တည်နေရာ၊
          အလျင်နှုန်း၊ ICAO No နဲ့ Modes အမျိုးအစားတွေကိုပါ သိရမှာဖြစ်ပါတယ်။
          Mode S ကို လေကြောင်းထိန်းချုပ်မှုလုပ်ငန်းစဉ်တွေမှာ
          အလိုအလျောက်ထိန်းကြောင်းမှုအတွက် အသုံးပြုပါတယ်။ Mode S ကို
          အသုံးပြုနေချိန်မှာ Mode A နဲ့ Mode C ကို ပါ Transponder ကနေ
          ဖြေဆိုနိုင်ပါတယ်။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="1" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          Mode 1 ကို စစ်ဘက် ATC တာဝါတွေမှာ အသုံးပြုပါတယ်။ ဒီ Mode 1 ကို
          အသုံးပြုရင် လေယာဉ်အမျိုးအစားနဲ့ ပျံသန်းမှုတာဝန်အမျိုးအစားတွေကို
          သိနိုင်မှာဖြစ်ပြီး၊ အသုံးပြုတဲ့ လျှို့ဝှက်ကုဒ်ကတော့ 2 digit octal code
          အမျိုးအစားနဲ့ သင်္ကေတပေါင်း ၆၄ ခုထိ ပါဝင်ပါတယ်။ ဒီလျှို့ဝှက်ကုဒ်တွေကို
          လေတပ်ဌာနချုပ်ကနေ အမေးနစ်မှာရော့ အဖြေစနစ်မှာပါ
          ကြိုတင်ထည့်သွင်းထားရတာဖြစ်ပြီး အလိုအလျောက်စနစ်နဲ့
          ရန်သူမိတ်ဆွေခွဲခြားနိုင်ပါတယ်။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="2" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          ဒီ Mode 2 ဟာ 4 digit octal code ကို အသုံးပြုထားပြီးတော့
          လျှို့ဝှက်ကုဒ်ပေါင်း ၄၀၉၆ ခုရှိပါတယ်။ လျို့ဝှက်သင်္ကေတကုဒ်ပေးတဲ့အခါ
          လေယာဉ်ရဲ့ နောက်မြီးနံပါတ်ကအပေါ်မူတည်ပြီး လေတပ်ဌာနချုပ်မှ
          ပေးရတာဖြစ်ပါတယ်။ ဒီ Mode 2 ကို အသုံးပြုဖို့ဆိုရင် လေယာဉ်နှင့်
          တိုက်ရိုက်ဆက်သွယ်မှုရှိဖို့လိုပါတယ်။ အမေးစနစ်နဲ့ အဖြေစနစ်နှစ်ခုလုံးမှာ
          လေယာဉ်ရဲ့ နောက်မြီးနံပါတ်တွေကို ကြိုတင်ထည့်သွင်း
          တိုက်ဆိုင်စစ်ဆေးပြီးတော့ IFFခွဲခြားနိုင်ပါတယ်။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="3" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          ဒီ Mode 3 ကတော့ အရပ်ဘက် Mode A နဲ့ အတူတူပဲဖြစ်ပါတယ်။ အမေးစနစ်နဲ့
          အဖြေစနစ် ၂ခုလုံးမှာ ထမ်းဆောင်နေတဲ့ တာဝန်တွေနဲ့ ပတ်သက်တဲ့
          လျှို့ဝှက်ကုတ်တွေကို ကြိုတင်ထည့်သွင်းထားရမှာဖြစ်ပါတယ်။ 4 digit octal
          code ကို အသုံးပြုထားပြီးတော့ လျှို့ဝှက်သင်္ကေတပေါင်း ၄၀၉၆
          ခုပါတင်ပါတယ်။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="4" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          လက်ရှိအသုံးပြုနေတဲ့ ရန်သူမိတ်ဆွေခွဲခြားမှုနည်းလမ်းတွေထဲမှာ ဒီ Mode 4
          ကတော့ ထိရောက်မှုအရှိဆုံး Mode တစ်ခုဖြစ်ပါတယ်။
          စနစ်ရဲ့လုပ်ဆောင်ချက်ကတော့ Interrogator ကနေ Transponder ဆီကို reply
          pulse signal 3 ခု ကို ပေးပို့လိုက်ပါတယ်။ အဲ့ဒီ signal ကို Transponder
          ကနေ မှန်မှန်ကန်ကန် decoding မလုပ်နိုင်ဘူးဆိုရင် reply pulse signal
          တွေကို ပြန်ပို့ပေးနိုင်မှာ မဟုတ်ဘူး။ mode 4 ဟာ လုံခြုံစိတ်ချရတဲ့
          နည်းလမ်းဖြစ်တာကြောင့် စစ်ဆင်ရေးကာလတွေမှာ အသုံးများပါတယ်။ ဒိ Mode 4 ကို
          အသုံးပြုနေချိန်ဆိုရင် ကျန်တဲ့ IFF Modes တွေ ဘာမှ သုံးရမှာ မဟုတ်ပါဘူး။
        </p>
      </div>
      <div className=" pt-2 pb-2">
        <Title title="Mode" subtitle="5" />
        <p className="pt-2 text-sm text-justify tracking-wider leading-6">
          Mode 5 ကတော့ Mode 4 ကို အဆင့်မြင့်ထားတာဖြစ်ပါတယ်။
          လုံခြုံမှုအဆင့်အတန်းမြင့်မားပြီးတော့
          မိမိမိတ်ဘက်လေယာဉ်များကိုအမျိုးအစား ခွဲခြားတဲ့နေရာမှာ အသုံးပြုပါတယ်။
        </p>
      </div>
      <div className="  pt-6 justify-center">
        <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူ" />
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 justify-center">
          <AutherComponet
            img={NLH}
            name="Main Advisor"
            degree="Nay Lin Htet"
            email="BE.Mech(mechanical)"
          />
          <AutherComponet
            img={KZH}
            name="Advisor"
            degree="Kyaw Zaw Hein"
            email="B.Sc(Electronic)"
          />
          <AutherComponet
            img={kn}
            name="Content Writer"
            degree="Kyaw Naing"
            email="MCSc"
          />
          {/* <AutherComponet
            img={lwin}
            name="Daw Nway Nandar Lwin"
            degree="B.N.Sc"
            email="nwaynway@gmail.com"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Fof
