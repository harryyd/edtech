import {configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/rootReducer';
import authReducer from '../feature/auth/authSlice.js';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
}); 