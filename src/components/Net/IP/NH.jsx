import React from 'react'

const NH = () => {
  return (
    <div>
      <p className="pt-3 text-sm text-justify tracking-wider leading-6">
        IP တစ်ခုစီတိုင်းမှာ 4 Octets ရှိပြီးတော့ Octet တစ်ခုစီတိုင်းမှာ 1 Byte
        (8 bits ) ရှိပါတယ်။ Class A အတွက် Network ID နဲ့ Host ID
        တွက်ကြည့်ကြရအောင်။ အပေါ်ပုံမှာပြထားတဲ့အတိုင်း Class A ဟာ N.H.H.H
        ဆိုတာတွေ့ရမယ်။ ဆိုလိုတာက Network က 1 Octet ဖြစ်ပြီးတော့ Host က 3 Octetဖြစ်ပါတယ်။ တွက်ရမဲ့ ဖော်မြူလာကတော့ 2n - 2 ဖြစ်ပါတယ်။
        <ul className=' indent-10 grid md:grid-cols-1 sm:gricol4'>
          <li> Network ID 27 - 2 =128 – 2 = 126</li>
          <li>Host ID 224 – 2=16,777,212</li>
        </ul>
      </p>
    </div>
  );
}

export default NH
