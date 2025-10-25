import { lazy } from 'react';
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const UserManagement = lazy(() => import('../pages/admin/UserManagement'));
const RoleManagement = lazy(() => import('../pages/admin/RoleManagement'));
const SystemSettings = lazy(() => import('../pages/admin/SystemSettings'));

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    element: Dashboard
  },
  {
    path: '/admin/users',
    element: UserManagement
  },
  {
    path: '/admin/roles',
    element: RoleManagement
  },
  {
    path: '/admin/settings',
    element: SystemSettings
  }
];