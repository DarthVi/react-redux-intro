import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./message";

const store = configureStore({
  reducer: messageReducer,
});

export default store;
