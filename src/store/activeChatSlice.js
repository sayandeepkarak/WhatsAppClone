const { createSlice } = require("@reduxjs/toolkit");

const ActiveChatSlice = createSlice({
  name: "activeChat",
  initialState: {
    chatAreaOpen: false,
  },
  reducers: {
    openChatArea(state, action) {
      state.chatAreaOpen = true;
    },
    closeChatArea(state, action) {
      state.chatAreaOpen = false;
    },
  },
});

export const { openChatArea, closeChatArea } = ActiveChatSlice.actions;
export default ActiveChatSlice.reducer;
