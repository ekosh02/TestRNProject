import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface PostsState {
  id: number;
  title: string;
  description: string;
}

const initialState: PostsState[] = [];

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd: (state, action) => {
      state.push(action.payload);
    },
    postDelete: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
  },
});

export const {postAdd, postDelete} = posts.actions;
export const selectCount = (state: RootState) => state.posts;
export default posts;
