import { createSlice } from "@reduxjs/toolkit";

const FriendsSlice = createSlice({
  name: "friends",
  initialState: {
    value: [],
  },
  reducers: {
    setFriends(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFriends } = FriendsSlice.actions;
export default FriendsSlice.reducer;
