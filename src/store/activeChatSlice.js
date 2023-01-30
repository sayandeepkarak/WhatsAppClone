const { createSlice } = require("@reduxjs/toolkit");

const ActiveChatSlice = createSlice({
  name: "activeChat",
  initialState: {
    value: {
      chatAreaOpen: false,
      chatData: [],
    },
  },
  reducers: {
    openChatArea(state, action) {
      state.value.chatAreaOpen = true;
      state.value.chatData = action.payload;
    },
    closeChatArea(state, action) {
      state.value.chatAreaOpen = false;
      state.value.chatData = [];
    },
  },
});

export const { openChatArea, closeChatArea } = ActiveChatSlice.actions;
export default ActiveChatSlice.reducer;
