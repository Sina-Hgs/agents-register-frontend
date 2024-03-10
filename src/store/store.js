import { configureStore } from "@reduxjs/toolkit";
import agentReducer from "./agentReducer";

export default configureStore({
  reducer: {
    agent: agentReducer,
  },
});
