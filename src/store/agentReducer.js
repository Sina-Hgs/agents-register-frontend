import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone_number: "09000000000",
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    phoneGetter: (state, action) => {
      state.phone_number = action.payload;
    },
  },
});

export const { phoneGetter } = agentSlice.actions;

export default agentSlice.reducer;
