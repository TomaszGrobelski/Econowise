import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './sections/Dashboard/Dashboard.tsx';
import CardsView from './sections/Cards/CardsView.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/cards',
        element: <CardsView />,
    },
    {
        path: '/diagrams',
        element: <Dashboard />,
    },
    {
        path: '/saveinvest',
        element: <Dashboard />,
    },
    {
        path: '/account',
        element: <Dashboard />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
