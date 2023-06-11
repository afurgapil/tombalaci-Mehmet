import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donate: null,
  wheel: null,
};

export const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setDonateContract: (state, action) => {
      state.donate = action.payload;
    },
    setWheelContract: (state, action) => {
      state.wheel = action.payload;
    },
  },
});

export const { setDonateContract, setWheelContract } = contractsSlice.actions;

export default contractsSlice.reducer;
