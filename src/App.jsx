import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[40%] bg-teal-600 -z-50 rounded-b-3xl">
        <img
          src="src/assets/Day.png"
          alt="Day Insurance Logo"
          className="m-auto z-50 size-28"
        />
      </div>
      <Login />
    </>
  );
}

export default App;
