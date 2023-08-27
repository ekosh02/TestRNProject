import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const darkMode = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setIsDark: (state, action) => {
      state.value = action.payload
    },
  },
});

export const {setIsDark} = darkMode.actions;

export default darkMode;
