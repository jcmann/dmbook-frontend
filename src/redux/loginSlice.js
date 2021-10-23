import { createSlice } from '@reduxjs/toolkit';

/**
 * This slice tracks whether the user is logged in or not. This affects
 * which menus are displayed.
 */
export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    authInfo: {
      authState: 'signin',
      user: {},
    },
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
    updateAuthInfo: (state, action) => {
      state.authInfo = action.payload;
    },
  },
});

export const { logOut, logIn, updateAuthInfo } = loginSlice.actions;
export default loginSlice.reducer;
