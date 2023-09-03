import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface DarkModeState {
  value: boolean
}

const initialState: DarkModeState = {
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
export const selectCount = (state: RootState) => state.darkMode.value
export default darkMode;
