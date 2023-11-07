import React from 'react'

const Keyboard = ({ 
    handleOperation,
    handleNumber,
    setSign,
    handleClear
}) => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const signs = ["+", "-","*", "/"];
  return (
    <div className=" py-4 flex justify-center">
      <div className=" grid grid-cols-3 gap-4 text-white">
        {numbers.map((number) => (
          <div
            onClick={() => handleNumber(number)}
            className=" bg-gray-700 p-4 text-center rounded-full border border-gray-400 shadow-md hover:bg-gray-500"
          >
            {number}
          </div>
        ))}
        <div
          onClick={() => handleNumber(".")}
          className=" bg-gray-700 p-4 text-center rounded-full border border-gray-400 shadow-md hover:bg-gray-500"
        >
          {" "}
          .
        </div>
        <div
          onClick={() => handleClear()}
          className=" bg-gray-700 p-4 text-center rounded-full border border-gray-400 shadow-md hover:bg-gray-500"
        >
          Del
        </div>
          </div>
          <div className=' grid ml-8 text-center w-20 bg-red-800 p-4 rounded-md grid-cols-1 gap-4 text-white'>
              {
                  signs.map((sign) => (
                      <div onClick={()=>setSign(sign)} className=' text-white text-center text-3xl font-semibold rounded-full hover:bg-red-700'>
                          { sign}
                      </div>
                  ))}
              <div
                  onClick={() => handleOperation()}
                  className=' text-white text-center text-3xl font-semibold rounded-full hover:bg-red-700'>
                  =
              </div>
              
          </div>
    </div>
  );
}

export default Keyboard
