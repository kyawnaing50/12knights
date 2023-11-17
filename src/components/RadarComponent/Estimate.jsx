import React from 'react'
import Title from '../Title';
import estimate from "../../assets/radar/estimate.png";
import AutherComponet from '../AutherComponet';
import kn from "../../assets/auther/kyawnaing.png";
import AMK from "../../assets/auther/amk.jpg"

const Estimate = () => {
  return (
    <div>
      <Title title="Estimate" subtitle="Algorithm" />
      <div className="pt-3 grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
        <p className="pt-2 text-sm text-justify tracking-wider leading-8">
          <span className="">Estimate Algorithm</span> ဆိုတာ System
          တစ်ခုရဲ့နောက်ကွယ်က အခြေအနေကို တွက်ချက်တဲ့ algorithm တစ်ခုဖြစ်ပါတယ်။
          ဥပမာ ဝေဟင်မှာပျံသန်းနေတဲ့ လေယာဉ်တစ်စီးရဲ့ တကယ်ရောက်ရှိနေတဲ့နေရာကို
          အတိအကျသိနိုင်ဖို့ဆိုတာ မလွယ်ကူပါဘူး။ တကယ်ရောက်ရှိတဲ့နေရာကို
          သိနိုင်နိုင်ဖို့ဆိုရင် ရေဒါကိုအသုံးပြုပြီး ဖြေရှင်းဆောင်ရွက်ကြရ ပါတယ်။
          ရေဒါအရေအတွက်များလေ ပိုမိုတိကျတဲ့ အဖြေကို ရရှိလေလေဖြစ်တာကြောင့်
          ရေဒါအရေအတွက်အများကြီး သုံးပြီး Tracking algorithm လို့ခေါ်တဲ့ Kalman
          Filter အသုံးပြုပြီး ဖြေရှင်းဆောင်ရွက်ကြရပါတယ်။ ဒါပေမဲ့
          အဲ့ဒီတွက်ချက်မှုတွေအားလုံးဟာ Estimate တွေပဲဖြစ်ပါတယ်။ Estimate
          Algorithm မှာ Accuracy နဲ့ Precision ဟာ အခြေခံ သဘောတရားတွေဖြစ်ပါတယ်။
          Accuracyဆိုတာ တွက်ချက်မှုရလဒ်ဟာ တန်ဖိုးအမှန်နဲ့
          ဘယ်လောက်ထိနီးစပ်သလဲဆိုတာကို ဖော်ပြပေးတာ ဖြစ်ပြီးတော့
          Precisionဆိုတာကတော့ တန်ဖိုးတစ်ခုကို အကြိမ်ကြိမ်တိုင်းတာပြီး
          ရရှိလာတဲ့တန်ဖိုးများရဲ့ ပြောင်းလဲမှုနှုန်းပါပဲ။
        </p>
        <img
          class=" mt-2 h-64 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={estimate}
          alt="image description"
        />
      </div>
      <p className="pt-2 text-sm text-justify tracking-wider leading-8">
        High precision system မှာ Lower variance တွေကိုထုတ်ပေးပြီး Low precision
        system မှာတော့ High variance တွေကို ထုတ်ပေးတယ်။ Variance
        ရဲ့တန်ဖိုးလွှမ်းမိုးမှုကို averaging or smoothing လုပ်ပြီး
        လျှော့ချနိုင်တယ်။ ဥပမာ အပူချိန်တိုင်းတာတဲ့အခါမှာ
        တန်ဖိုးအမှန်ကိုရဖို့အတွက် အကြိမ်ရေများများတိုင်းတာပြီး
        တန်ဖိုးအမှန်အနားထိကပ်နိုင်တယ်ပေါ့။ Variance ဆိုတာကတော့ Normal
        Distribution Law အရ mean တိုင်းမှာ သက်ရောက်နေတဲ့ တန်ဖိုးတွေကို
        ဆိုလိုပါတယ်။ Lower accuracy system ကို biased system လို့ခေါ်တယ်။ Biased
        system ဆိုတာကတော့ system ထဲမှာကိုအမှားတန်ဖိုးတွေ ပါနေတာမျိုးဖြစ်ပါတယ်။
        တကယ်လို့ သာမိုမီတာက အစကတည်းက မှားနေခဲ့ရင် အပူချိန်တိုင်းတဲ့အခါမှာ
        တူညီတဲ့အမှားကိုပဲ ထပ်ခါထပ်ခါ ထုတ်ပေးနေမှာဖြစ်တယ်။ ဥပမာ ကျောင်းသား၂၀ဦးနဲ့
        ကျောင်းသူ၃၀ဦးရှိတဲ့ စာသင်ခန်းတစ်ခန်းထဲရှိ ကျောင်းသူကျောင်းသားတွေကို
        စိုင်းစိုင်းခမ်းလှိုင်အားပေးသူနဲ့ မျိုးကြီးအားပေးသူဆိုပြီး
        ဖန်ခွဲမယ်ဆိုပါက စိုင်းစိုင်းခမ်းလှိုင်အားပေးတဲ့
        ဦးရေကပိုများနေမှာပဲဖြစ်တယ်။ ဒါပေမဲ့ ဒီရလဒ်အတွက်နဲ့တော့
        စိုးစိုင်းခမ်းလှိုင်ဟာ မျိုးကြိးထက်ပိုတော်တဲ့အဆိုတော်လို့
        ပြောလို့မရနိုင်ဘူး။ အစကတည်းက မှားယွင်းနေတဲ့ Systemကြောင့်သာ
        ဒီရလဒ်ထွက်ပေါ်လာတာပဲဖြစ်တယ်။ ဒါကို Biased system လို့ခေါ်တယ်ပေါ့။
      </p>
      <div className="pt-6">
        <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူ" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2  ">
          <AutherComponet
            img={kn}
            name="Editor"
            degree="Kyaw Naing "
            email="MCSc"
          />
          <AutherComponet
            img={AMK}
            name="Content Creator"
            degree="Aung Min Khant"
            email="ME(E.C)"
          />
        </div>
      </div>
    </div>
  );
}

export default Estimate
