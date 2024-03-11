import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Countdown from "react-countdown";
import { create_otp } from "../api/axios";

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
            // putting the as text instead of number so that the maxLength works on chrome
            type="text"
            min={0}
            max={9}
            maxLength={1}
            pattern="[0-9]"
            required
            key={i}
            className="border-2 rounded-lg border-gray-300 py-2 px-2 w-12 h-12  text-center appearance-none"
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
        <div className="w-[80%] flex flex-row-reverse justify-evenly mb-10">
          {...inputes}
        </div>
      </label>

      {/* Countdown */}
      <Countdown
        autoStart={true}
        date={Date.now() + 120 * 1000}
        renderer={({ minutes, seconds, completed }) => {
          if (completed) {
            return (
              <div className="text-gray-400 flex flex-row justify-center items-baseline mb-5 ">
                <button
                  type="button"
                  onClick={() => {
                    create_otp(phoneNumber);
                  }}
                  className="px-2 hover:underline hover: hover:text-gray-500"
                >
                  ارسال مجدد کد
                </button>
                <span>0:00</span>
              </div>
            );
          } else {
            return (
              <div className="text-gray-400 flex flex-row justify-center items-baseline mb-5 ">
                <div className="px-2 ">ارسال مجدد کد</div>
                <span>
                  {minutes}:{seconds}
                </span>
              </div>
            );
          }
        }}
      />

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
