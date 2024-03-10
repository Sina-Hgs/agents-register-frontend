import { useRef } from "react";
import { create_otp } from "../api/axios";

const PhoneLogin = () => {
  const phoneRef = useRef("");

  const handleClick = () => {
    create_otp(phoneRef.current);
  };

  return (
    <>
      <form>
        <label
          htmlFor="phone"
          className="w-[100%] flex flex-col justify-between items-center"
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
            className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mb-14 text-right"
          />
        </label>

        <button
          type="button"
          onClick={() => handleClick()}
          className="bg-teal-600 text-white w-[80%] mb-5 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
        >
          ادامه
        </button>
      </form>
    </>
  );
};

export default PhoneLogin;
