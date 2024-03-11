import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone_number: "شماره تلفن را وارد کنید.",
  first_name: "محمد",
  last_name: "محمدی",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    phoneGetter: (state, action) => {
      state.phone_number = action.payload;
    },
    nameGetter: ({ first_name, last_name }, action) => {
      (first_name = action.payload[0]), (last_name = action.payload[1]);
    },
  },
});

export const { phoneGetter, nameGetter } = agentSlice.actions;

export default agentSlice.reducer;
