import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  userInfo: {
    id: string;
    fullName: string;
    profileImageURL: string;
  };
}

const initialState: userState = {
  userInfo: {
    id: "",
    fullName: "",
    profileImageURL: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;

      state.userInfo = {
        id: newUser.id,
        fullName: newUser.fullName,
        profileImageURL: newUser.profileImageURL,
      };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
