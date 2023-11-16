import BinaryNumber from "../components/Numbers/BinaryNumber";
import DecimalNumber from "../components/Numbers/DecimalNumber";
import HexaDecimal from "../components/Numbers/HexaDecimal";
import Octal from "../components/Numbers/Octal";
import Title from "../components/Title";
import number from "../assets/number/number.png"
import AutherComponet from "../components/AutherComponet";
import kn from "../assets/auther/kyawnaing.png";

const Numbers = () => {
  return (
    <div className=" w-full h-full">
      <Title title="Number" subtitle="System" />
      <div className=" pt-3 grid md:grid-cols-2 sm:grid-cols-1 pb-2 mr-3">
        <p className="flex pr-2 pt-3 text-sm text-justify">
          Number sytem ၄ မျိုးရှိပါသည်။ ၎င်းတို့မှာ Binary Number System, Octal
          Number System, Decimal Number System နှင့် Hexadecimal Number System
          တို့ဖြစ်ပါသည်။
        </p>
        <img
          class=" h-44 max-h-fit mx-auto pt-4 pb-2 rounded-2xl"
          src={number}
          alt="image description"
        />
        {/* <p className=" mt-2 text-center text-sm text-pink-800">
          figure- Number System
        </p> */}
      </div>

      <div className=" pt-2 pb-4">
        <Title title="Binary" subtitle="Number" />
        <BinaryNumber />
      </div>
      <div className=" pt-2 pb-4">
        <Title title="Octal" subtitle="Number" />
        <Octal />
      </div>

      <div className=" pt-2 pb-4">
        <Title title="Decimal" subtitle="Number" />
        <DecimalNumber />
      </div>

      <div className="pt-2">
        <Title title="Hexadecimal" subtitle="Number" />
        <HexaDecimal />
      </div>
      <div className="">
        <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူများ" />
        <AutherComponet
          img={kn}
          name="Kyaw Naing"
          degree="BCSc, MCSc"
          email="zayyarzawye@gmail.com"
        />
      </div>
    </div>
  );
};

export default Numbers;
