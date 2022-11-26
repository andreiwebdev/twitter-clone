import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./tweet-slice";

export const store = configureStore({
  reducer: {
    tweet: tweetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
