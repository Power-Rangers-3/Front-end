import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { router } from 'router';
import { store } from 'store';
import { Global } from '@emotion/react';
import { getGlobalStyles } from 'styles/globalStyles';

export const App = () => (
  <Provider store={store}>
    <Global styles={getGlobalStyles()} />
    <RouterProvider router={router} />
  </Provider>
);
