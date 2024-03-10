import axios from "axios";

export const create_otp = async (phoneNumber) => {
  let data = JSON.stringify({ phone_number: phoneNumber });
  console.log(data);
  axios
    .request({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/create_otp/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.response.data.error_details.fa_details);
    });
};
