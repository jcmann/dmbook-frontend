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

export const initDatasetThunk = createAsyncThunk(
  "api/init",
  async (arg, { dispatch, getState, signal }) => {
    console.log("Beginning initDatasetThunk");
    let URL = USERS_ENDPOINT + arg.jwt + "/all";
    console.log("URL: " + URL);

    let response = "";
    let data = {};

    try {
      console.log("Beginning try block.");
      response = await fetch(URL);
      console.log("Enc Response:");
      console.log(response);

      data = await response.json();
      console.log("Enc data:");
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    console.log("Final data:");
    // shape data and return it
    const finalData = {
      ...data,
    };
    console.log(finalData);

    return finalData;
  }
);

export const deleteResourceThunk = createAsyncThunk(
  "api/delete",
  async (arg, { dispatch, getState, signal }) => {
    let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint + "/" + arg.id;
    const response = await fetch(URL, { method: "DELETE" })
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        console.log("In the deleteResourceThunk. Response data is currently:");
        console.log(dataJSON);
        // probably delete from local state here to reduce traffic requests
        return dataJSON;
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

export const addResourceThunk = createAsyncThunk(
  "api/post",
  async (arg, { dispatch, getState, signal }) => {
    let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint; // api/users/:jwt/characters for example
    let body = JSON.stringify(arg.formData);
    const response = fetch(URL, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

export const editResourceThunk = createAsyncThunk(
  "api/put",
  async (arg, { dispatch, getState, signal }) => {
    let URL =
      USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint + "/" + arg.formData.id;

    console.log("EDIT URL" + URL);

    let body = JSON.stringify(arg.formData);

    const response = fetch(URL, {
      method: "PUT",
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        console.log("Response from PUT: ");
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
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
    isEditing: false,
    editResourceID: 0,
    // allResources: {
    //   characters: [],
    //   encounters: [],
    // },
    characters: [],
    encounters: [],
    monsters: [],
  },
  reducers: {
    changeEditingStatuses(state, action) {
      state.isEditing = action.payload.isEditing;
      state.editResourceID = action.payload.editResourceID;
    },
  },
  extraReducers: {
    [initDatasetThunk.fulfilled](state, { payload }) {
      console.log("PAYLOAD: ");
      console.log(payload);
      // state.allResources = payload;
      state.characters = payload.characters;
      state.encounters = payload.encounters;
      state.monsters = payload.monsters;
      state.loadingStatus = "FULFILLED";
    },
    [initDatasetThunk.pending](state) {
      console.log("PENDING");
      state.loadingStatus = "PENDING";
    },
    [initDatasetThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
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
    [deleteResourceThunk.fulfilled](state, { payload }) {
      console.log("In deleteResourceThunk.fulfilled reducer.");
      console.log(payload);
      // probably reload the component or do something
      state.loadingStatus = "FULFILLED";
    },
    [deleteResourceThunk.pending](state) {
      console.log("deleteResource PENDING");
      state.loadingStatus = "PENDING";
    },
    [deleteResourceThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
    [addResourceThunk.fulfilled](state, { payload }) {
      console.log("In addResourceThunk.fulfilled reducer.");
      console.log(payload);
      // probably reload the component or do something
      state.loadingStatus = "FULFILLED";
    },
    [addResourceThunk.pending](state) {
      console.log("addResource PENDING");
      state.loadingStatus = "PENDING";
    },
    [addResourceThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
    [editResourceThunk.fulfilled](state, { payload }) {
      console.log("In editResourceThunk.fulfilled reducer.");
      console.log(payload);
      // probably reload the component or do something
      state.loadingStatus = "FULFILLED";
    },
    [editResourceThunk.pending](state) {
      console.log("editResource PENDING");
      state.loadingStatus = "PENDING";
    },
    [editResourceThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
  },
});

export const { changeEditingStatuses } = dataSlice.actions;

export default dataSlice.reducer;
