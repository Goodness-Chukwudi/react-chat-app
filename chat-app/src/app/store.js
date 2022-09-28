import { createStateSyncMiddleware, initMessageListener, initStateWithPrevTab } from 'redux-state-sync';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import chatReducer from '../features/chartView/chatSlice';

const middlewares = [createStateSyncMiddleware({})];

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
  // middleware: middlewares
});
// initMessageListener(store);

// export {store};