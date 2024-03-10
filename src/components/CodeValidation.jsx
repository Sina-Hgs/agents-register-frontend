import { useEffect, useState } from "react";

const CodeValidation = () => {
  const [inputes, setInputes] = useState([]);

  // making the inputes
  let i = 1;
  useEffect(() => {
    if (inputes.length == 0) {
      for (i; i <= 5; i++) {
        setInputes((prevState) => [
          prevState,
          <input
            name="code"
            type="number"
            min={1}
            max={9}
            required
            key={i}
            className="border-2 rounded-lg border-gray-300 py-2 px-2 w-12 h-12 mb-5 text-center appearance-none"
          />,
        ]);
      }
    }
  }, []);

  return (
    <form className="bg-white">
      <label
        htmlFor="code"
        className="w-[100%] flex flex-col justify-between items-center transition-all"
      >
        <h3>کد تایید را وارد نمایید.</h3>
        <div className="w-[80%] flex flex-row justify-evenly">{...inputes}</div>
      </label>

      <button
        type="button"
        onClick={() => handleClick()}
        className="bg-teal-600 text-white w-[80%] mb-2 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
      >
        ادامه
      </button>
    </form>
  );
};

export default CodeValidation;
