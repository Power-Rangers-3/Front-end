import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { router } from 'router';
import { store } from 'store';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
