import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL, USERS_ENDPOINT } from "../config/config";

/**
 * getAllResources expects the following information passed in as the first argument: the logged-in user's ID
 * Token JWT from auth info, and the endpoint being requested. This information forms the URL that the
 * request is sent to.
 */
export const getAllResourcesThunk = createAsyncThunk(
  "api/getAll",
  async (arg, { dispatch, getState, signal }) => {
    let URL = API_BASE_URL + arg.jwt + USERS_ENDPOINT;
    const response = await fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      });
  }
);

/**
 * This slice handles all connectivity to the API
 */
export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getAllResourcesThunk.fulfilled](state, { payload }) {
      state.resources = payload;
    },
  },
});

export default dataSlice.reducer;
