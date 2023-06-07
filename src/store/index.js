import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slicers/data";
import contractsSlice from "./slicers/contract";
import userSlice from "./slicers/user";
export const store = configureStore({
  reducer: {
    data: dataSlice,
    contracts: contractsSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
