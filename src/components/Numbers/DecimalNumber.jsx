import React from 'react'

const DecimalNumber = () => {
  return (
    <div>
      <p className="pt-2 text-sm text-justify">
        Decimal number system သည် 0 to 9 အခြေခံဖြစ်သောကြောင့် base 10 number
        system ဟု ခေါ်ပါသည်။ ဥပမာ 1475 ဟူသော ကိန်းဂဏန်းတစ်ခု၏ decimal တန်ဖိုးမှာ
        အောက်ပါအတိုင်းဖြစ်သည်-
        <ul className=' pl-5'>
          <li>1475= (1×103) + (4×102) + (5×101) + (7×100)</li>
          <li>1475= (1×1000) + (4×100) + (5×10) + (7×1)</li>
          <li>1475= 1000 + 400 + 50 + 7</li>
        </ul>
      </p>
    </div>
  );
}

export default DecimalNumber