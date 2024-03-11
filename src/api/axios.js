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
