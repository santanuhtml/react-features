import { lazy } from 'react';
const Dashboard = lazy(() => import('../pages/user/Dashboard'));
const Profile = lazy(() => import('../pages/user/Profile'));
const Settings = lazy(() => import('../pages/user/Settings'));

export const userRoutes = [
  {
    path: '/dashboard',
    element: Dashboard
  },
  {
    path: '/profile',
    element: Profile
  },
  {
    path: '/settings',
    element: Settings
  }
];