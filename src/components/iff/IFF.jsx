import React from 'react'
import Title from '../Title';

const IFF = () => {
  return (
    <div className="">
      <Title title="Mode" subtitle="1" />
      <div className="">
        <p className="w-full text-sm py-3 text-justify">
          စစ်ဘက်လေယာဉ်နှင့် စစ်သင်္ဘောများတွင်အသုံးပြုပြီး မည်သည့်နိုင်ငံမှ
          လေယာဉ်ဖြစ်သည်၊ မည်သည့်တာဝန်ထမ်းဆောင်နေသည်၊
          မည်သည့်လေယာဉ်ကွင်းမှထွက်ခွာလာသည်ကို သိရှိနိုင်ပြီး 2 Digit Code ကို
          အသုံးပြုပါသည်။ လေယာဉ်များတွင် ကိုယ်ပိုင် Code သတ်မှတ်၍ အသုံးပြုပါသည်။
        </p>
        <div className=" w-full h-60 bg-cyan-500 text-center justify-center pr-6 pl-4 mt-4 mb-4">
          OK
        </div>
      </div>

      <Title title="Mode" subtitle="2" />
      <di>
        <p className="w-full text-sm py-3 text-justify">
          စစ်ဘက်လေယာဉ်နှင့် စစ်သင်္ဘောများတွင် အသုံးပြုပြီး
          မည်သည့်နိုင်ငံမှလေယာဉ်ဖြစ်သည်၊ မည်သည့်တာဝန်ထမ်းဆောင်နေသည်၊
          မည်သည့်လေယာဉ်ကွင်းမှထွက်ခွာလာသည်ကို သိရှိနိုင်ပြီး 4 Digit Code ကို
          အသုံးပြုပါသည်။ စစ်ဘက်လေကြောင်းထိန်းမှ သတ်မှတ်ပေးထားသော Code အား
          လေယာဉ်မှူးမှ ပြောင်းလဲ၍အသုံးပြုပါသည်။ Mode 3 ။ အခြေခံအကျဆုံး Mode
          တစ်ခုဖြစ်ပြီး စစ်ဘက်လေယာဉ်များ၊ ရဟတ်ယာဉ် များသည်
          အရပ်ဘက်လေကြောင်းထိန်းနှင့် ဆက်သွယ်ဆောင်ရွက်ရန် လိုအပ်သောအချိန်တွင်
          အသုံးပြုပါသည်။ အရပ်ဘက် SSR Mode A နှင့် တူညီပြီး လေယာဉ်၏အမြင့်ကို
          ဖော်ပြနိုင်သည့် Mode C နှင့် တွဲဖက်အသုံးပြုလေ့ရှိပါသည်။
        </p>
        <div className=" w-full h-60 bg-cyan-500 text-center justify-center pr-6 pl-4 mt-4 mb-4">
          OK
        </div>
      </di>

      <Title title="Mode" subtitle="6 (Similar to Mode 4)" />
      <div>
        <p className="w-full text-sm py-3 text-justify">
          စစ်ဘက်လေယာဉ်နှင့် စစ်သင်္ဘောများအတွက် ရန်သူ/မိတ်ဆွေခွဲခြားရန်
          သီးသန့်အသုံးပြုပြီး စစ်မက်ဖြစ်ပွားသောအချိန်တွင်သာအသုံးပြုသော Security
          Mode ဖြစ်ပါသည်။ တရုတ်နိုင်ငံမှ တီထွင်ထုတ်လုပ်သည့် Security Mode
          ဖြစ်ပြီး Security Mode 4နှင့် ဆင်တူပါသည်။
        </p>
        <div className=" w-full h-60 bg-cyan-500 text-center justify-center pr-6 pl-4 mt-4 mb-4">
          OK
        </div>
      </div>
    </div>
  );
}

export default IFF
