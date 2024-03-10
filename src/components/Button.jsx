const Button = ({ placeholder }) => {
  return (
    <button
      type="submit"
      className="bg-teal-600 text-white w-[80%] mb-5 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
    >
      {placeholder}
    </button>
  );
};

export default Button;
