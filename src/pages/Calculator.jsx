// import React, { useState } from 'react'

// const Calculator = () => {
//     const [result, setResult] = useState("");
//     const handleClick = e => setResult(result.concat(e.target.id));
//     const clear = () => setResult("");
//     const deleteEl = () => setResult(result.slice((0, -1)));

//     const calculate = () => { 'calculate is declared but its value is never read'
//         try {
//             setResult(eval(result).toString())
//         }
//         catch (error) { 
//            setResult('Error') 
//         }
//     }
//   return (
//     <div className="flex flex-col pt-10 pl-44 pb-5 pr-4 mt-10 mb-5">
//       <input type="text" value={result} disabled />

//       <div className=" mt-5 flex border gap-5" >
//         <button className='operator' onClick={clear}>AC</button>
//         <button className=' operator' onClick={deleteEl}>DE</button>
//         <button id='.' className='operator' onClick={handleClick}>.</button>
//         <button id='/' className='operator' onClick={handleClick}>/</button>
//       </div>
//     </div>
//   );
// }

// export default Calculator;


import React, { useState } from 'react'
import ResultScreen from '../components/ResultScreen';
import Keyboard from '../components/Keyboard';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState([]);
    const [secondNumber, setSecondNumber] = useState([]);
    const [sign, setSign] = useState(null);
    const [result, setResult] = useState(0);
    
    const handleClear = () => {
        setFirstNumber([]);
        setSecondNumber([]);
        setResult(0);
        setSign(null);
}
    const handleNumber = (number) => {
        if (result !== 0) {
            handleClear();
        }
        if (!sign) {
            if (firstNumber) {
                setFirstNumber((oldNumber) => [...oldNumber,number]);
            }
        } else {
            if (secondNumber) {
                setSecondNumber((oldNumber) => [...oldNumber,number]);
            }
        }
    };
    const handleOperation = () => {
        const num1 = parseInt(firstNumber.join(""), 10);
        const num2 = parseInt(secondNumber.join(""), 10);
        if (sign == "+") setResult(num1 + num2);
        else if (sign == "*") setResult(num1 * num2);
        else setResult(num1/num2);
    }
  return (
      <div className=' bg-gray-800 rounded-lg border shadow-md w-96 my-32 mx-80'>
          <ResultScreen firstNumber={firstNumber} secondNumber={secondNumber} sign={sign} result={result} />
          <Keyboard  handleOperation={handleOperation} handleNumber={handleNumber} setSign={setSign} handleClear={ handleClear} />
    </div>
  )
}
export default Calculator
