import { configureStore } from "@reduxjs/toolkit";
import AllReducers from "../Allreducersconfigure";

const Store = configureStore({
  reducer: AllReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
