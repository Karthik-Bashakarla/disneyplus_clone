import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
};

const movieReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesAction: (state, action) => ({ ...state, movieList: action.payload }),
  },
});

export const { moviesAction } = movieReducer.actions;
export default movieReducer.reducer;
