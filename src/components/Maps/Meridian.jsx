import React from 'react'
import meridian from "../../assets/map/meridian.jpg";
import Title from '../Title';
import TrueMeridian from './TrueMeridian';
import MagneticMeridian from './MagneticMeridian';
import AxialMeridian from './AxialMeridian';
import kn from "../../assets/auther/kyawnaing.png";
import AutherComponet from '../AutherComponet';

const Meridian = () => {
  return (
    <div className="">
      <div>
        <Title title="Meridian" subtitle="" />
        <p className="pt-2 text-sm text-justify">
          Meridian မျဉ်းဟူသည် ကမ္ဘာကြီး၏
          တောင်နှင့်မြောက်တွယ်တန်းထားသောမျဉ်းဖြစ်ပါသည်။ တနည်းအားဖြင့်
          လောင်ဂျီကျူးမျဉ်းဖြစ်ပါသည်။ Meridian သည် Great Circle ၏
          စက်ဝိုင်းခြမ်းတစ်ခြမ်းပင်ဖြစ်ပါသည်။ ၎င်း၏အလျားမှာ ခန့်မှန်းခြေအားဖြင့်
          WGS84 မြေပုံစနစ်အရ ၂၀,၀၀၃.၉၃ ကီလိုမီတာ(၁၂,၄၂၉.၈၇မိုင်) ခန့်ရှိပါသည်။
        </p>
        <img
          class=" h-60 max-h-fit mx-auto pt-4 pb-2"
          src={meridian}
          alt="image description"
        />
        <p className=" text-center text-sm text-pink-800 pb-4">
          figure - Meridian
        </p>
      </div>

      {/* True Meridian */}
      <Title title="True" subtitle="Meridian" />
      <TrueMeridian />
      <Title title="Magnetic" subtitle="Meridian" />
      <MagneticMeridian />
      <Title title="Axial" subtitle="Meridian" />
      <AxialMeridian />
      
      <div className="">
        <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူ" />
        <AutherComponet
          img={kn}
          name="Kyaw Naing"
          degree="BCSc, MCSc"
          email="zayyarzawye@gmail.com"
        />
      </div>
    </div>
  );
}

export default Meridian