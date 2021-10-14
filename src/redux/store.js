import { configureStore } from '@reduxjs/toolkit';
// import a reducer
import displayReducer from './displaySlice';
import loginReducer from './loginSlice';

export default configureStore({
  reducer: {
    display: displayReducer,
    login: loginReducer,
  },
});
