import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ErrorPage from './ErrorPage';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FansPage from './routes/fans';
import OrderPage from './routes/order';
import OrderSummaryPage from './routes/order-summary';
import RootPage from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fans',
    element: <FansPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/order',
    element: <OrderPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/order-summary',
    element: <OrderSummaryPage />,
    errorElement: <ErrorPage />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);

reportWebVitals(console.log);
