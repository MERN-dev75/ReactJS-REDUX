import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducer from './rootReducer'; // Root reducer to manage application state

// Create a custom Axios instance for making API requests
export const axiosInstance = axios.create({
  baseURL: `/`, // Base URL for all API calls
  headers: {
    "Content-Type": "application/json", // Ensures requests are sent with JSON data
  },
});

// Configure the Redux store
const store = configureStore({
  // Register the root reducer
  reducer,

  // Customize middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        // Pass the Axios instance as an extra argument to thunks
        extraArgument: axiosInstance,
      },
    }),

  // Enable Redux DevTools in non-production environments
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

