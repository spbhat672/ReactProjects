import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: 0
  },
  reducers: {
    createLocation: (state, param) => {
      state.location += param.payload;
    },
    deleteLocation: (state, param) => {
      state.location -= param.payload;
    },
  },
});
const { actions, reducer } = locationSlice;
export const { createLocation, deleteLocation } = actions;
export default reducer;
