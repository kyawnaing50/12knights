import React from 'react'
import decimal from '../../assets/number/decimal.png'

const DecimalNumber = () => {
  return (
    <div>
      <p className="pt-2 text-sm text-justify">
        Decimal number system သည် 0 to 9 အခြေခံဖြစ်သောကြောင့် base 10 number
        system ဟု ခေါ်ပါသည်။ ဥပမာ 1475 ဟူသော ကိန်းဂဏန်းတစ်ခု၏ decimal တန်ဖိုးမှာ
        အောက်ပါအတိုင်းဖြစ်သည်-
        <div className=" pl-10 max-h-fit mx-auto pt-2 pb-2">
          <ul className=" text-left">
            <li>1457= (1×103) + (4×102) + (5×101) + (7×100)</li>
            <li>1457= (1×1000) + (4×100) + (5×10) + (7×1)</li>
            <li>1457= 1000 + 400 + 50 + 7</li>
          </ul>
        </div>
      </p>
      <div className="">
        <img
          class=" h-60 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={decimal}
          alt="image description"
        />
        <p className=" text-center text-sm text-pink-800">
          Figure- decimal Number
        </p>
      </div>
    </div>
  );
}

export default DecimalNumber