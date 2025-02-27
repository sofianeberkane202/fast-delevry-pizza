import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const UserReducer = createSlice({
  initialState,
  name: "user",
  reducers: {
    createUser(state, action) {
      // payload: name
      state.name = action.payload;
    },
  },
});

export function getName(state) {
  return state.user.name;
}

export const { createUser } = UserReducer.actions;

export default UserReducer.reducer;
