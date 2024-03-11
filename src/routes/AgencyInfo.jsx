import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { codeGetter } from "../store/agentReducer";
import { validate_agent, provinces_wop, counties_wop } from "../api/axios";
import Container from "../components/Container";

const AgencyInfo = () => {
  // agent code
  const agentCodeRef = useRef(null);
  const [errorText, setErrorText] = useState("No error");
  const [showError, setShowError] = useState("invisible");

  // province
  const [provinces, setProvinces] = useState(null);
  const [provincesDropDown, setProvincesDropDown] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(false);

  // county
  const [counties, setCounties] = useState(null);
  const [countiesDropDown, setCountiesDropDown] = useState([]);

  const dispatch = useDispatch();

  // برای کد نمایندگی
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

  // لیست استان‌ها

  // !**************
  const getProvinces = async () => {
    try {
      const res = await provinces_wop();
      setProvinces(res);

      // console.log("provinces list✅ GET successful", res);
      return res;
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    // console.log(provinces);
    if (provinces != null && provincesDropDown.length == 0) {
      for (let i = 0; i < provinces.length; i++) {
        setProvincesDropDown((prev) => [
          ...prev,
          <option value={provinces[i].id} key={provinces[i].name}>
            {provinces[i].name}
          </option>,
        ]);
      }
    }
  }, [provinces]);

  // ***********!

  // لیست شهرها
  // !********************************
  const getCounties = async (id) => {
    try {
      // console.log(id, "id");
      const res = await counties_wop(id);
      setCounties(res);

      // console.log("counties list✅ GET successful", res);
      return res;
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    if (selectedProvince != false) {
      getCounties(selectedProvince);
    }
  }, [selectedProvince]);

  useEffect(() => {
    // console.log(counties);
    if (counties != null && countiesDropDown.length == 0) {
      for (let i = 0; i < counties.length; i++) {
        setCountiesDropDown((prev) => [
          ...prev,
          <option value={counties[i].id} key={counties[i].name}>
            {counties[i].name}
          </option>,
        ]);
      }
    }
  }, [counties]);

  // *******************************!

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

          {/* استان */}
          <select
            onChange={(e) => {
              setSelectedProvince(e.target.value);
            }}
            className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mb-3 text-right"
          >
            <option value={null} disabled hidden selected>
              استان
            </option>
            {...provincesDropDown}
          </select>

          {/* شهر */}
          <select
            disabled={!selectedProvince}
            className="border-2 rounded-2xl border-gray-300 py-3 px-4 w-[80%] mb-3 text-right"
          >
            <option value={null} disabled hidden selected>
              شهر
            </option>
            {...countiesDropDown}
          </select>
        </form>
      </Container>
    </>
  );
};

export default AgencyInfo;
