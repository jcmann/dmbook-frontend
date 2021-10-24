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
      state = {};
      window.location.reload();
    },
    updateAuthInfo: (state, action) => {
      state.authInfo = action.payload.authInfo;
    },
  },
});

export const { logOut, updateAuthInfo } = loginSlice.actions;
export default loginSlice.reducer;
