const Form = ({
  formLabel,
  info,
  inputType,
  inputPlaceholder,
  showButton,
  buttonPlaceHolder,
}) => {
  return (
    <form>
      <label className="w-[100%] flex flex-col justify-between items-center">
        <span className="mb-6 text-xl">
          {formLabel}
          <p className="text-gray-500 text-base">{info}</p>
        </span>

        <input
          type={inputType}
          placeholder={inputPlaceholder}
          required
          className="border-2 rounded-2xl border-gray-300 py-3 px-2 w-[80%] mb-12 text-right"
        />
      </label>

      {showButton ? (
        <button
          type="submit"
          className="bg-teal-600 text-white w-[80%] mb-5 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
        >
          {buttonPlaceHolder}
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};

export default Form;
