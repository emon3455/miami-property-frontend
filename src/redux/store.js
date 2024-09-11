import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/api';
import addressSlice from './features/address/address';

const store = configureStore({
  reducer: {
    addressSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
