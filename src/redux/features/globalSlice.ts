import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalSlice = {
  drawerOpen: boolean;
};

const initialState: GlobalSlice = {
  drawerOpen: false,
};

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    resetGlobalSlice: () => initialState,
    openDrawer: (state) => {
      state.drawerOpen = true;
    },
    closeDrawer: (state) => {
      state.drawerOpen = false;
    },
  },
});

export const { resetGlobalSlice, closeDrawer, openDrawer } = global.actions;
export default global.reducer;
