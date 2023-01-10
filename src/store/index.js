import { configureStore } from "@reduxjs/toolkit";
import ActiveChatReducer from "./activeChatSlice";

const store = configureStore({
  reducer: { activeChat: ActiveChatReducer },
});

export default store;
