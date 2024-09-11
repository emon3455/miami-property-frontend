import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  addressInfo: {},
};

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    addressAction: (state, action) => {
      state.addressInfo = action.payload;
    },
  },
});

export const { addressAction } = addressSlice.actions;

export default addressSlice.reducer;
