import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctCoinflip: null,
  correctDice: null,
  correctJackpot: null,
  correctRoulette: null,
  correctRps: null,
  correctSlot: null,
  score: null,
  displayName: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCorrectCoinFlip: (state, action) => {
      state.correctCoinflip = action.payload;
    },
    setCorrectDice: (state, action) => {
      state.correctDice = action.payload;
    },
    setCorrectJackpot: (state, action) => {
      state.correctJackpot = action.payload;
    },
    setCorrectRoulette: (state, action) => {
      state.correctRoulette = action.payload;
    },
    setCorrectRps: (state, action) => {
      state.correctRps = action.payload;
    },
    setCorrectSlot: (state, action) => {
      state.correctSlot = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
  },
});

export const {
  setCorrectCoinFlip,
  setCorrectDice,
  setCorrectJackpot,
  setCorrectRoulette,
  setCorrectRps,
  setCorrectSlot,
  setScore,
  setDisplayName,
} = userSlice.actions;

export default userSlice.reducer;
