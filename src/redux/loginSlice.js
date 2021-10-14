import { createSlice } from '@reduxjs/toolkit';

/**
 * This slice tracks whether the user is logged in or not. This affects
 * which menus are displayed.
 */
export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.isLoggedIn = false;
      // do anything else necessary (clear session?)
    },
    logIn: (state, action) => {
      // verification?
      state.isLoggedIn = true;
    },
  },
});

export const { logOut, logIn } = loginSlice.actions;
export default loginSlice.reducer;
