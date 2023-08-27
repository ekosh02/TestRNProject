import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    multiplication: (state, action) => {
      state.value *= action.payload;
    },
    division: (state, action) => {
      state.value /= action.payload;
    },
    reset: state => {
      state.value = 1;
    },
  },
});

export const {multiplication, division, reset} = counterSlice.actions;

export default counterSlice.reducer;
