import { useRef, useState } from "react";
import { create_otp } from "../api/axios";
import { useNavigate } from "react-router-dom";

const PhoneLogin = () => {
  const phoneRef = useRef("");
  const [errorText, setErrorText] = useState("No error");
  const [showError, setShowError] = useState("invisible");
  const Navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await create_otp(phoneRef.current);
      console.log("hey there", res);
      Navigate("./validation");
    } catch (error) {
      console.log(error.response.data.error_details.fa_details);
      setErrorText(error.response.data.error_details.fa_details);
      setShowError("visible");
    }
  };

  return (
    <form className="bg-white">
      <label
        htmlFor="phone"
        className="w-[100%] flex flex-col justify-between items-center transition-all "
      >
        <span className="mb-6 text-xl">
          شماره موبایل خود را وارد نمایید.
          <p className="text-gray-500 text-base">
            کد تایید برای شما ارسال خواهد شد.
          </p>
        </span>

        <input
          name="phone"
          type="tel"
          placeholder="شماره همراه"
          onChange={(e) => (phoneRef.current = e.target.value)}
          required
          className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mb-2 text-right"
        />
        <div
          className={`
        mb-14 w-[80%] px-4 text-red-600  text-sm ml-auto text-right mx-7 ${showError} 
        `}
        >
          {errorText}
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

export default PhoneLogin;
