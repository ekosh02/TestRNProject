import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../featutes/counter/counterSlice';
import {pokemonApi} from '../services/pokemon';
import {setupListeners} from '@reduxjs/toolkit/query';
import darkMode from '../featutes/darkMode/darkMode';
import posts from '../featutes/posts/posts';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [darkMode.name]: darkMode.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [posts.name]: posts.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


setupListeners(store.dispatch);