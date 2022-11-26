import { createSlice } from "@reduxjs/toolkit";

export interface TweetState {
  tweetsList: [
    {
      id: number;
      description: string;
      imageUrl: string;
    }
  ];
}

const initialState: TweetState = {
  tweetsList: [
    {
      id: 0,
      description: "test",
      imageUrl: "",
    },
  ],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweet(state, action) {
      const newTweet = action.payload;

      state.tweetsList.push({
        id: newTweet.id,
        description: newTweet.description,
        imageUrl: newTweet.imageUrl,
      });
    },
  },
});

export const { addTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
