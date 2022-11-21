import { createSlice } from "@reduxjs/toolkit";

const initialMessageState = { message: "" };

const messageSlice = createSlice({
  name: "message",
  initialState: initialMessageState,
  reducers: {
    addWord(state, action) {
      if (state.message === "") {
        state.message = action.payload;
      } else state.message = `${state.message} ${action.payload}`;
    },
    removeWord(state) {
      state.message = state.message.split(" ").slice(0, -1).join(" ");
    },
    reset(state) {
      state.message = initialMessageState.message;
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
