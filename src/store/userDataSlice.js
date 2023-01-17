import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: [],
  },
  reducers: {
    setUserData(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
