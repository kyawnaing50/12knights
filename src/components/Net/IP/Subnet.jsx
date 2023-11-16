import React from 'react'
import one from '../../../assets/network/1.png'
import two from "../../../assets/network/2.png";
import three from "../../../assets/network/3.png";
import sn1 from "../../../assets/network/sn1.png";
import sn2 from "../../../assets/network/sn2.png";
import sn3 from "../../../assets/network/sn3.png";
import sn4 from "../../../assets/network/sn4.png";
import sn5 from "../../../assets/network/sn5.png";
import sn6 from "../../../assets/network/sn6.png";

const Subnet = () => {
    return (
      <>
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 pb-4 mr-3">
          <p className=" mr-4 pt-3 text-sm text-justify tracking-wider leading-6">
            ပုံပါအတိုင်း ပေးထားတဲ့ Network address ကို ပေးထားတဲ့ mask
            ပေါ်အခြေခံပြီး subnets 6 ခုခွဲပြပါ။ subnetတစ်ခုချင်းစီအတွက် subnet
            address, subnet mask , first device , last device , နဲ့ broadcast
            address တို့ ခွဲပြပါ။
          </p>
          <img
            className=" mt-2 md:h-28 sm:h-20 max-h-fit mx-auto pt-2 pb-2 rounded-2xl"
            src={one}
            alt="image description"
          />
        </div>
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 pb-4 mr-3">
          <p className=" mr-4 pt-4 text-sm text-justify tracking-wider leading-6">
            အဆင့်(၁) ။ပေးထားတဲ့ Network Address ကို Decimal to Binary
            ပြောင်းနည်းအတိုင်း binary တန်ဖိုးပြောင်းဖို့လိုပါတယ်။ ပုံပါအတိုင်း
            တွေ့ရမှာဖြစ်ပါတယ်။
          </p>
          <img
            className=" mt-2 md:h-28 sm:h-20 max-h-fit mx-auto pt-2 pb-2 rounded-2xl"
            src={two}
            alt="image description"
          />
        </div>
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 pb-4 mr-3">
          <p className=" mr-4 pt-4 text-sm text-justify tracking-wider leading-6">
            အဆင့်(၂)။ Mask အရေအတွက်အတိုင်း Binary ပြောင်းထားတဲ့ တန်ဖိုးတွေကို
            ပိုင်းဖြတ်ဖို့လိုအပ်ပါတယ်။ Masks အရေအတွက်က 24 ဖြစ်တဲ့အတွက် binary
            တန်ဖိုးကိုလည်း ၂၄ နေရာအထိ ပိုင်းဖြတ်ရပါမယ်။ ပြီးရင် အဲ့ဒီ၂၄
            နေရာလုံးမှာရှိတဲ့ Binary တန်ဖိုးတွေကို 1 ပြောင်းပစ်ပါ ။ ပြီးရင်တော့
            အလိုရှိတဲ့ Subnets အရေအတွက်ကို ကြည့်ဖို့လိုအပ်ပါတယ်။
            ဒီပုစ္ဆာမှာဆိုရင် Subnetsက 6 ဖြစ်တာကြောင့် 24 bits ကို 3 bits
            ထပ်ပေါင်းဖို့လိုအပ်ပါတယ်။ အဲ့ဒီတန်ဖိုးကတော့ Mask တန်ဖိုးပဲဖြစ်ပါတယ်။
            ပြီးရင်တော့ Network Addressတန်ဖိုးနဲ့ Mask တန်ဖိုးတို့ရဲ့
            Binaryတွေကို ပေါင်းပါ။ ပေါင်းတဲ့နေရာမှာ 1,1 ဆိုရင် 1 ယူပြီး 1, 0
            ဆိုရင် 0 ယူရမှာဖြစ်ပါတယ်။ ရလာတဲ့တန်ဖိုးကတော့ Subnet Address
            ပဲဖြစ်ပါတယ်။
          </p>
          <img
            className=" mt-2 h-52 max-h-fit mx-auto pt-2 pb-2 rounded-2xl"
            src={three}
            alt="image description"
          />
        </div>

        <div className=" ">
          <p className=" mr-4 pt-4 text-sm text-justify tracking-wider leading-6">
            အဆင့်(၃)။ ဒီအဆင့်ကတော့ Subnetတစ်ခုစီတိုင်းမှာ Host ID
            ဘယ်နှစ်ခုပါဝင်သလဲဆိုတာကို တွက်တဲ့အပိုင်းဖြစ်ပါတယ်။
            စောစောကပြောခဲ့တဲ့အထဲမှာ mask အရေအတွက်နဲ့ ထပ်တိုးပေါင်း bits အရေအတွက်
            (24+3=27 ) ဆိုတာကို သိပြီးဖြစ်မှာပါ။ အဲ့ဒါကြောင့် ပုံသေနည်းမှာ
            အစားထိုးတွက်ရရင် 2 power (32-27) -2= 30 ရပါတယ်။ subnetတစ်ခုမှာ Host
            ID 30 ခုစီပါတင်ပါတယ်။
          </p>
        </div>
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 pb-4 mr-3">
          <div>
            <h5 className="mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 1
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn1}
              alt="image description"
            />
          </div>

          <div>
            <h5 className=" mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 2
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn2}
              alt="image description"
            />
          </div>
          <div>
            <h5 className=" mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 3
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn3}
              alt="image description"
            />
          </div>
          <div>
            <h5 className=" mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 4
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn4}
              alt="image description"
            />
          </div>
          <div>
            <h5 className=" mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 5
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn5}
              alt="image description"
            />
          </div>
          <div>
            <h5 className=" mr-4 ml-4 pt-4 text-sm text-justify tracking-wider leading-6">
              Subnet 6
            </h5>
            <img
              className=" mt-2 h-52 max-h-fit mx-auto pb-2 rounded-2xl"
              src={sn6}
              alt="image description"
            />
          </div>
        </div>
      </>
    );
}

export default Subnet
