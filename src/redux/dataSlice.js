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
    let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint;
    const response = await fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        console.log("In the getAllResourcesThunk. Data is currently:");
        console.log(dataJSON);
        return dataJSON;
      })
      .catch((err) => {
        console.error(err);
      });

    return response;
  }
);

/**
 * This slice handles all connectivity to the API
 */
export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    loadingStatus: null,
    resources: [],
  },
  reducers: {},
  extraReducers: {
    [getAllResourcesThunk.fulfilled](state, { payload }) {
      console.log("PAYLOAD: ");
      console.log(payload);
      state.resources = payload;
      state.loadingStatus = "FULFILLED";
    },
    [getAllResourcesThunk.pending](state) {
      console.log("PENDING");
      state.loadingStatus = "PENDING";
    },
    [getAllResourcesThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
  },
});

export default dataSlice.reducer;
