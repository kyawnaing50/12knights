import React from 'react'
import octal from "../../assets/number/octal.png"

const Octal = () => {
  return (
    <div className="pt-3 grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
      <p className="pt-3 text-sm text-justify tracking-wider leading-6">
        Decimal number system သည် 0 to 7 အခြေခံဖြစ်သောကြောင့် base 8 number
        system ဟု ခေါ်ပါသည်။ ဥပမာ- 8=10, 9=11, 29=35, 12=14.
      </p>
      <div className="">
        <img
          class=" h-32 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={octal}
          alt="image description"
        />
        {/* <p className=" mt-2 text-center text-sm text-pink-800">
          Figure- Octal Number
        </p> */}
      </div>
    </div>
  );
}

export default Octal