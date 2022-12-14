import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./tweet-slice";
import userSlice from "./user-slice";

export const store = configureStore({
  reducer: {
    tweet: tweetSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
