import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastWinner: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLastWinner: (state, action) => {
      state.lastWinner = action.payload;
    },
  },
});

export const { setLastWinner } = userSlice.actions;

export default userSlice.reducer;
