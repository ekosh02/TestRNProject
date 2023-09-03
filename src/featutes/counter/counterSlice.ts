import {createSlice} from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
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
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice;
