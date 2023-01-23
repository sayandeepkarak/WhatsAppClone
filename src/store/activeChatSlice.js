const { createSlice } = require("@reduxjs/toolkit");

const ActiveChatSlice = createSlice({
  name: "activeChat",
  initialState: {
    chatAreaOpen: false,
    chatData: [],
  },
  reducers: {
    openChatArea(state, action) {
      state.chatAreaOpen = true;
      state.chatData = action.payload;
    },
    closeChatArea(state, action) {
      state.chatAreaOpen = false;
      state.chatData = [];
    },
  },
});

export const { openChatArea, closeChatArea } = ActiveChatSlice.actions;
export default ActiveChatSlice.reducer;
