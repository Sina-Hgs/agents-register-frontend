import axios from "axios";

// signing in with phone number (step 1)
export const create_otp = async (phoneNumber) => {
  let data = JSON.stringify({ phone_number: phoneNumber });

  const response = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/create_otp/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  return JSON.stringify(response.data);
};

export const validate_otp = async (phone_number, code) => {
  let data = JSON.stringify({
    code: code,
    phone_number: phone_number,
  });
  console.log(code);

  const response = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/validate_otp/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  console.log(JSON.stringify(response.data));
  return JSON.stringify(response.data);
};

export const validate_agent = async (code) => {
  let data = JSON.stringify({
    agent_code: code,
  });

  const response = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/check_agency_code/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });

  return JSON.stringify(response.data);
};

export const provinces_wop = async () => {
  const response = await axios.request({
    method: "get",
    maxBodyLength: Infinity,
    url: "https://stage-api.sanaap.co/base/provinces_wop/",
    headers: {},
  });
  // console.log(JSON.stringify(response.data));
  return response.data;
};

export const counties_wop = async (province) => {
  // console.log(province);
  const response = await axios.request({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://stage-api.sanaap.co/base/counties_wop/?province=${province}`,
    headers: {},
  });
  // console.log(JSON.stringify(response.data));
  return response.data;
};

export const insurance_list = async (name, province) => {
  // console.log(name, province);
  const response = await axios.request({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://stage-api.sanaap.co/api/v2/app/selection_item/insurance_branch/wop_list/?name=${name}&insurance=DEY&province=${province}`,
    headers: {},
  });
  // console.log(JSON.stringify(response.data));
  return response.data;
};

export const register_agent = async (
  address,
  agency_type,
  agent_code,
  city_code,
  county,
  first_name,
  insurance_branch,
  last_name,
  name,
  phone,
  phone_number,
  province
) => {
  let data = JSON.stringify({
    address,
    agency_type,
    agent_code,
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
  const response = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  console.log(JSON.stringify(response.data));
  return response.data;
};
