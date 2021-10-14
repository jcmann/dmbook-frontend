import { createSlice } from "@reduxjs/toolkit";

/**
 * This slice determines which MainContent and ToolMenu are being displayed
 */
export const displaySlice = createSlice({
  name: "displaySlice",
  initialState: {
    currentContent: "home",
  },
  reducers: {
    changeCurrentContent: (state, action) => {
      console.log(`In Reducer. Payload: ${action.payload.newContent}`);
      state.currentContent = action.payload.newContent;
      // state.currentContent = action.payload.newContent;
    },
  },
});

export const { changeCurrentContent } = displaySlice.actions;
export default displaySlice.reducer;
