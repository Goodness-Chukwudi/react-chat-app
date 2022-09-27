import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chartView/chatSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
