import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './core/context/AuthContext.jsx';
import MainLayout from './components/MainLayout.jsx';
import ProtectedRoute from './core/components/ProtectedRoute.jsx';

import DashboardPage from './modules/dashboard/DashboardPage.jsx';
import AuthPage from './modules/auth/AuthPage.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: 
      <AuthPage />,
  },
  {
    path:'/',
    element: 
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>,
    children:[
      { index: true, 
        element:  <DashboardPage />
      },
      {
        path: 'dashboard',
        element: <DashboardPage />
      }
    ]
  }
])

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;
