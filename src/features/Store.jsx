import { configureStore } from "@reduxjs/toolkit";
import Noteslice from "../Noteslice";

const Store = configureStore({
  reducer: {
    users: Noteslice.reducer,
  },
});

export default Store;
