import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone_number: "شماره تلفن را وارد کنید.",
  first_name: "نام",
  last_name: "نام خانوادگی",
  agent_code: "کد نمایندگی",
  province: "استان",
  county: "شهر",
  address: "آدرس",
  insurance_branch: "آیدی شعبه بیمه",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    phoneGetter: (state, action) => {
      state.phone_number = action.payload;
    },
    nameGetter: (state, action) => {
      state.first_name = action.payload[0];
      state.last_name = action.payload[1];
    },
    codeGetter: (state, action) => {
      state.agent_code = action.payload;
    },
    locationGetter: (state, action) => {
      state.province = action.payload[0];
      state.county = action.payload[1];
    },
    addressGetter: (state, action) => {
      state.address = action.payload;
    },
    branchGetter: (state, action) => {
      state.insurance_branch = action.payload;
      console.log(state.insurance_branch);
    },
  },
});

export const {
  phoneGetter,
  nameGetter,
  codeGetter,
  locationGetter,
  addressGetter,
  branchGetter,
} = agentSlice.actions;

export default agentSlice.reducer;
