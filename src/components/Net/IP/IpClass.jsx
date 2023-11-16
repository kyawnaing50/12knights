import React from 'react';
import ipclass from '../../../assets/network/class.png';

const IpClass = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
      <p className=" mr-4 pt-3 text-sm text-justify tracking-wider leading-6">
        IP Address မှာ Network ID နဲ့ Host ID ဆိုပြီးပါဝင်တယ်။ Host ID မပါရင် IP
        Address အဆင့်မဟုတ်ဘဲ Network Address အဆင့်သာဖြစ်ပါတယ်။ IP Address တွေကို
        Class ခွဲတဲ့အခါမှာ Network ID နဲ့ Host ID အရေအတွက်ပေါ်မူတည်ပြီးတော့
        ခွဲကြတာဖြစ်တယ်။ A, B, C ,D, E ဆိုပြီး IP Class 5 ခုရှိတယ်။ အောက်ပါပုံနဲ့
        ပြထားပါတယ်။
      </p>
      <img
        className=" h-44 max-h-fit mx-auto pt-4 rounded-2xl"
        src={ipclass}
        alt="image description"
      />
      {/* <p className=" text-center text-sm text-pink-800 pb-4 tracking-wider leading-6">
        figure - IP Address Classses
      </p> */}
    </div>
  );
}

export default IpClass
