'use client'; // Required for client components in Next.js (enables client-side rendering)

import { Provider } from 'react-redux'; // Import Provider to make Redux store accessible throughout the component tree
import store from './store'; // Import the Redux store configuration

// ReduxProvider component to wrap the application with the Redux store
export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>  {/* Provides the Redux store to the component tree */}
      {children}  {/* Renders all child components */}
    </Provider>
  );
}
