import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './Features/habitSlice'

const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;