import { configureStore } from "@reduxjs/toolkit";
import ActiveChatReducer from "./activeChatSlice";
import userDataReducer from "./userDataSlice";

const store = configureStore({
  reducer: {
    activeChat: ActiveChatReducer,
    userData: userDataReducer,
  },
});

export default store;
