import { configureStore } from "@reduxjs/toolkit";
import ActiveChatReducer from "./activeChatSlice";
import userDataReducer from "./userDataSlice";
import friendsReducer from "./friendsSlice";

const store = configureStore({
  reducer: {
    activeChat: ActiveChatReducer,
    userData: userDataReducer,
    friends: friendsReducer,
  },
});

export default store;
