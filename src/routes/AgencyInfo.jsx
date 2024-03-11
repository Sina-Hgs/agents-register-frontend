import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { codeGetter } from "../store/agentReducer";
import { validate_agent } from "../api/axios";
import Container from "../components/Container";

const AgencyInfo = () => {
  const agentCodeRef = useRef(null);
  const [errorText, setErrorText] = useState("No error");
  const [showError, setShowError] = useState("invisible");
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    agentCodeRef.current = e.target.value;
    // giving the code to the store
    dispatch(codeGetter(agentCodeRef.current));
    // making the POST request to the server with the phone number
    try {
      const res = await validate_agent(agentCodeRef.current);
      console.log("agent code✅ POST successful", res);
      setShowError("invisible");
    } catch (error) {
      console.log(error.response.data.error_details.fa_details);
      setErrorText(error.response.data.error_details.fa_details);
      setShowError("visible");
    }
  };

  return (
    <>
      <Container>
        <form className="bg-white">
          <label
            htmlFor="phone"
            className="w-[100%] flex flex-col justify-between items-center transition-all "
          >
            <input
              name="agent code"
              type="text"
              placeholder="کد نمایندگی"
              required
              onChange={(e) => handleChange(e)}
              className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mt-5 mb-3 text-right"
            />
          </label>

          <div
            className={`
        mb-5 w-[80%] px-4 text-red-600  text-sm ml-auto text-right mx-7 ${showError} 
        `}
          >
            {errorText}
          </div>
        </form>
      </Container>
    </>
  );
};

export default AgencyInfo;
