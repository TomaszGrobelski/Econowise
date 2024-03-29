import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardView from './sections/Dashboard/DashboardView.tsx';
import CardsView from './sections/Cards/CardsView.tsx';
import ShoppingView from './sections/Shooping/ShoppingView.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardView />,
    },
    {
        path: '/cards',
        element: <CardsView />,
    },
    {
        path: '/diagrams',
        element: <DashboardView />,
    },
    {
        path: 'shopping',
        element: <ShoppingView />,
    },
    {
        path: '/saveinvest',
        element: <DashboardView />,
    },
    {
        path: '/account',
        element: <DashboardView />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </QueryClientProvider>
);
