const { createSlice } = require("@reduxjs/toolkit");

const ActiveChatSlice = createSlice({
  name: "activeChat",
  initialState: {
    value: {
      chatAreaOpen: false,
      chatData: [],
      chat: [],
    },
  },
  reducers: {
    openChatArea(state, action) {
      state.value.chatAreaOpen = true;
      state.value.chatData = action.payload;
    },
    setActiveChat(state, action) {
      state.value.chat = action.payload;
    },
    closeChatArea(state, action) {
      state.value.chatAreaOpen = false;
      state.value.chatData = [];
    },
  },
});

export const { openChatArea, closeChatArea, setActiveChat } =
  ActiveChatSlice.actions;
export default ActiveChatSlice.reducer;
