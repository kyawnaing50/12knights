import BinaryNumber from "../components/Numbers/BinaryNumber";
import DecimalNumber from "../components/Numbers/DecimalNumber";
import HexaDecimal from "../components/Numbers/HexaDecimal";
import Title from "../components/Title";

const Numbers = () => {
  return (
    <div className="h-screen">
      <div className=" pb-7">
        <Title title="Decimal" subtitle="Number" />
        <DecimalNumber />
      </div>
      <div className=" pb-7">
        <Title title="Binary" subtitle="Number" />
        <BinaryNumber />
      </div>

      <Title title="Hexadecimal" subtitle="Number" />
      <HexaDecimal />
    </div>
  );
};

export default Numbers;
