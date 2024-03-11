import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Validation from "./routes/Validation";
import { Provider } from "react-redux";
import store from "./store/store";
import AgentInfo from "./routes/AgentInfo";
import AgencyInfo from "./routes/AgencyInfo";
import "./App.css";

function App() {
  return (
    <>
      {/* STORE */}
      <Provider store={store}>
        {/* background  */}
        <div className="absolute top-0 left-0 w-screen h-[40%] bg-teal-600 -z-50 rounded-b-3xl">
          {/* Insurance Logo */}
          <img
            src="src/assets/Day.png"
            alt="Day Insurance Logo"
            className="m-auto z-50 size-28 max-md:size-16"
          />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="validation" element={<Validation />}></Route>
            <Route path="agent_info" element={<AgentInfo />}></Route>
            <Route path="agency" element={<AgencyInfo />}></Route>
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
