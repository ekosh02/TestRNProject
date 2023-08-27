import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../featutes/counter/counterSlice';
import {pokemonApi} from './../services/pokemon';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

setupListeners(store.dispatch);