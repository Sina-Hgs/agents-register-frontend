import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone_number: "شماره تلفن را وارد کنید.",
  first_name: "نام",
  last_name: "نام خانوادگی",
  agent_code: "کد نمایندگی",
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
  },
});

export const { phoneGetter, nameGetter, codeGetter } = agentSlice.actions;

export default agentSlice.reducer;
