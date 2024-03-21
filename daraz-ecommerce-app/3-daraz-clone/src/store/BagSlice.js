import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload)
    },
    removeFromBag: (state, action) => {
      state.pop(action.payload)
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
