import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllResourcesThunk = createAsyncThunk("api/getAll", async () => {
  // Get stuff from API
});

/**
 * This slice handles all connectivity to the API
 */
export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {},
  reducers: {},
  extraReducers: {},
});
