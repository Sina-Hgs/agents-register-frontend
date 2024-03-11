import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nameGetter } from "../store/agentReducer";
import Container from "../components/Container";

const AgentInfo = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [showError, setShowError] = useState("invisible");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <>
      <Container>
        <form className="bg-white">
          <label
            htmlFor="phone"
            className="w-[100%] flex flex-col justify-between items-center transition-all "
          >
            <input
              name="first name"
              type="text"
              placeholder="نام"
              required
              onChange={(e) => (firstNameRef.current = e.target.value)}
              className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mt-5 mb-10 text-right"
            />

            <input
              name="last name"
              type="text"
              placeholder="نام خانوادگی"
              required
              onChange={(e) => (lastNameRef.current = e.target.value)}
              className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mb-10 text-right"
            />
          </label>

          <div
            className={`
        mb-5 w-[80%] px-4 text-red-600  text-sm ml-auto text-right mx-7 ${showError} 
        `}
          >
            نام یا نام خانوادگی نمی‌تواند خالی باشد.
          </div>
          <button
            type="button"
            onClick={() => {
              if (
                (firstNameRef.current != null) &
                (lastNameRef.current != null)
              ) {
                dispatch(
                  nameGetter([firstNameRef.current, lastNameRef.current])
                );
                console.log([firstNameRef.current, lastNameRef.current]);
                Navigate("/agency");
              } else {
                setShowError("visible");
              }
            }}
            className="bg-teal-600 text-white w-[80%] mb-2 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
          >
            ادامه
          </button>
        </form>
      </Container>
    </>
  );
};

export default AgentInfo;
