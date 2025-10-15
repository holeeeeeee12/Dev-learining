import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
