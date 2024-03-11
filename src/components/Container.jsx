const Container = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-96 m-auto relative top-[10%] py-5 max-md:w-60">
      {children}
    </div>
  );
};

export default Container;
