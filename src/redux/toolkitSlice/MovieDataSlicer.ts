import {createSlice} from '@reduxjs/toolkit';

const movieDataSlice = createSlice({
  name: 'movieDataSlice',
  initialState: {},
  reducers: {
    addMovieData(state, action) {
      return (state = action.payload);
    },
  },
});
export const {addMovieData} = movieDataSlice.actions;
export default movieDataSlice.reducer;
