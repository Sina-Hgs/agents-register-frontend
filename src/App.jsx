import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Validation from "./routes/Validation";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <>
      {/* STORE */}
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
