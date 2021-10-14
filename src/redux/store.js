import { configureStore } from "@reduxjs/toolkit";
// import a reducer
import displayReducer from "./displaySlice";

export default configureStore({
  reducer: {
    display: displayReducer,
  },
});
