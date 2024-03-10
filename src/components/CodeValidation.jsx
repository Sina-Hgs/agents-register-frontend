import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CodeValidation = () => {
  const phoneNumber = useSelector((state) => state.agent.phone_number);
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
            min={0}
            max={9}
            maxLength={1}
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
        <h3 className="text-gray-500 mb-1 text-xl">کد تایید را وارد نمایید.</h3>
        <div className="py-2 flex flex-row-reverse justify-around items-baseline mb-1">
          <p className="font-base mx-2">{phoneNumber}</p>
          <Link
            to={"/"}
            className="text-white text-xs bg-teal-600 px-1.5 py-1 rounded-full hover:bg-teal-700"
          >
            &#128393;
          </Link>
        </div>
        <div className="w-[80%] flex flex-row-reverse justify-evenly">
          {...inputes}
        </div>
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
