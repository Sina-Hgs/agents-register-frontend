import { useEffect, useState } from "react";
import { register_agent } from "../api/axios";
import { useSelector } from "react-redux";

const SubmitBtn = () => {
  const [data, setData] = useState([]);
  // using useSelector on by one like the redux docs say
  const address = useSelector((state) => {
    state.agent;
  });
  const agency_type = useSelector((state) => {
    state.agent.agency_type;
  });
  const agency_code = useSelector((state) => {
    state.agent.agency_code;
  });
  const city_code = useSelector((state) => {
    state.agent.city_code;
  });
  const county = useSelector((state) => {
    state.agent.county;
  });
  const first_name = useSelector((state) => {
    state.agent.first_name;
  });
  const insurance_branch = useSelector((state) => {
    state.agent.insurance_branch;
  });
  const last_name = useSelector((state) => {
    state.agent.last_name;
  });
  const name = useSelector((state) => {
    state.agent.name;
  });
  const phone = useSelector((state) => {
    state.agent.phone;
  });
  const phone_number = useSelector((state) => {
    state.agent.phone_number;
  });
  const province = useSelector((state) => {
    state.agent.province;
  });

  useEffect(() => {
    setData([
      address,
      agency_type,
      agency_code,
      city_code,
      county,
      first_name,
      insurance_branch,
      last_name,
      name,
      phone,
      phone_number,
      province,
    ]);
  }, []);
  // posting the data
  const postData = async ({
    address,
    agency_type,
    agency_code,
    city_code,
    county,
    first_name,
    insurance_branch,
    last_name,
    name,
    phone,
    phone_number,
    province,
  }) => {
    try {
      const res = await register_agent({
        address,
        agency_type,
        agency_code,
        city_code,
        county,
        first_name,
        insurance_branch,
        last_name,
        name,
        phone,
        phone_number,
        province,
      });
      console.log("register✔ POST successful", res);
    } catch (error) {
      console.log(error.response.data.error_details.fa_details);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={() => {
          postData({
            ...data,
          });
        }}
        className="bg-teal-600 text-white w-[80%] mb-2 py-2 rounded-lg hover:bg-teal-700 focus:bg-teal-700"
      >
        ثبت نام
      </button>
    </>
  );
};

export default SubmitBtn;
