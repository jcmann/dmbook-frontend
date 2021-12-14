import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USERS_ENDPOINT } from "../config/config";

/**
 * This method initializes all data used by the application when the App component renders, using a useEffect.
 * It initializes state data for encounters, characters, and monsters, which is then maintained through other
 * dispatched actions.
 */
export const initDatasetThunk = createAsyncThunk(
  "api/init",
  async (arg, { dispatch, getState, signal }) => {
    let URL = USERS_ENDPOINT + arg.jwt + "/all";
    let response = "";
    let data = {};

    try {
      response = await fetch(URL);
      data = await response.json();
    } catch (err) {
      console.error(err);
    }

    const finalData = {
      ...data,
    };

    return finalData;
  }
);

/**
 * getAllResources expects the following information passed in as the first argument: the logged-in user's ID
 * Token JWT from auth info, and the endpoint being requested. This information forms the URL that the
 * request is sent to.
 *
 * NOTE: this is deprecated, but I left it to show initial proof of concept
 */
// export const getAllResourcesThunk = createAsyncThunk(
//   "api/getAll",
//   async (arg, { dispatch, getState, signal }) => {
//     let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint;
//     const response = await fetch(URL)
//       .then((data) => {
//         return data.json();
//       })
//       .then((dataJSON) => {
//         // console.log("In the getAllResourcesThunk. Data is currently:");
//         // console.log(dataJSON);
//         return dataJSON;
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//
//     return response;
//   }
// );

/**
 * This handles all delete requests. It requires an arg object with a JWT, dataEndpoint (ex: encounters), and resource ID (id).
 * It sends a DELETE request to the API.
 */
export const deleteResourceThunk = createAsyncThunk(
  "api/delete",
  async (arg, { dispatch, getState, signal }) => {
    let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint + "/" + arg.id;
    const response = await fetch(URL, { method: "DELETE" })
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        // console.log("In the deleteResourceThunk. Response data is currently:");
        // console.log(dataJSON);
        return dataJSON;
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

/**
 * This thunk handles forming POST requests to send to the API. It requires an arg object with a jwt property,
 * a dataEndpoint property (ex: characters), and formData. formData should be provided via a submit handler.
 */
export const addResourceThunk = createAsyncThunk(
  "api/post",
  async (arg, { dispatch, getState, signal }) => {
    let URL = USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint; // api/users/:jwt/characters for example
    let body = JSON.stringify(arg.formData);
    const response = await fetch(URL, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        return dataJSON;
      })
      .catch((err) => {
        console.error(err);
      });
    return { resourceType: arg.dataEndpoint, newData: arg.formData };
  }
);

/**
 * This thunk handles PUT requests to the API. It expects an arg object with properties: jwt (ID token), dataEndpoint, and
 * formData.
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const editResourceThunk = createAsyncThunk(
  "api/put",
  async (arg, { dispatch, getState, signal }) => {
    let URL =
      USERS_ENDPOINT + arg.jwt + "/" + arg.dataEndpoint + "/" + arg.formData.id;

    let body = JSON.stringify(arg.formData);

    const response = fetch(URL, {
      method: "PUT",
      body: body,
      headers: { "Content-Type": "application/json" },
    }).catch((err) => {
      console.error(err);
    });

    return await dispatch(initDatasetThunk({ jwt: arg.jwt }));
  }
);

/**
 * This slice handles all connectivity to the API
 */
export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    loadingStatus: null,
    isEditing: false,
    editResourceID: 0,
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
      // console.log("PAYLOAD: ");
      // console.log(payload);
      state.characters = payload.characters;
      state.encounters = payload.encounters;
      state.monsters = payload.monsters;
      state.loadingStatus = "FULFILLED";
    },
    [initDatasetThunk.pending](state) {
      // console.log("PENDING");
      state.loadingStatus = "PENDING";
    },
    [initDatasetThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
    [deleteResourceThunk.fulfilled](state, { payload }) {
      // console.log("In deleteResourceThunk.fulfilled reducer.");
      // console.log(payload);
      state.loadingStatus = "FULFILLED";
    },
    [deleteResourceThunk.pending](state) {
      // console.log("deleteResource PENDING");
      state.loadingStatus = "PENDING";
    },
    [deleteResourceThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
    [addResourceThunk.fulfilled](state, { payload, dispatch }) {
      // console.log("In addResourceThunk.fulfilled reducer.");
      // console.log(payload);
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
      // console.log("In editResourceThunk.fulfilled reducer.");
      // console.log(payload);
      state.loadingStatus = "FULFILLED";
    },
    [editResourceThunk.pending](state) {
      // console.log("editResource PENDING");
      state.loadingStatus = "PENDING";
    },
    [editResourceThunk.rejected](state, { error }) {
      state.loadingStatus = "REJECTED";
    },
  },
});

export const { changeEditingStatuses } = dataSlice.actions;

export default dataSlice.reducer;
