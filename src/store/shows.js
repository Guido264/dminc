import { createSlice } from "@reduxjs/toolkit";

const initialShowState = { shows: [] };

const showsSlice = createSlice({
  name: "shows",
  initialState: initialShowState,
  reducers: {
    shows(state, action) {
      state.shows = action.payload;
    },
  },
});

export const showsActions = showsSlice.actions;

export default showsSlice.reducer;
