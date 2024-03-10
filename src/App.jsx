import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Validation from "./routes/Validation";

import "./App.css";

function App() {
  return (
    <>
      {/* background  */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-teal-600 -z-50 rounded-b-3xl">
        {/* Insurance Logo */}
        <img
          src="src/assets/Day.png"
          alt="Day Insurance Logo"
          className="m-auto z-50 size-28"
        />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/validation" element={<Validation />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
