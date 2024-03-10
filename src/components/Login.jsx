import Button from "./Button";
import Form from "./Form";

const Login = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-96 relative top-[20%] py-5 ">
      {/* <span className="mb-5">
        <h2 className="text-xl">شماره موبایل خود را وارد نمایید.</h2>
        <p className="text-gray-500 text-base">
          کد تایید برای شما ارسال خواهد شد.
        </p>
      </span>

      <input
        className="border-2 rounded-2xl border-gray-300 py-3 px-2 w-[80%] mb-12"
        placeholder="شماره همراه"
        type="tel"
      />
      <Button placeholder={"ادامه"} /> */}

      <Form
        formLabel={"شماره موبایل خود را وارد نمایید."}
        info={"کد تایید برای شما ارسال خواهد شد."}
        inputType={"tel"}
        inputPlaceholder={"شماره همراه"}
        showButton={true}
        buttonPlaceHolder={"ادامه"}
      />
    </div>
  );
};

export default Login;
