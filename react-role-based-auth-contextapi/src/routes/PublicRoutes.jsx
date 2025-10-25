import { lazy } from 'react';
const Home = lazy(() => import('../pages/public/Home'));
const About = lazy(() => import('../pages/public/About'));
const Login = lazy(() => import('../pages/public/Login'));
const Signup = lazy(() => import('../pages/public/Signup'));
const Unauthorized = lazy(() => import('../pages/public/Unauthorized'));

export const publicRoutes = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/about',
    element: About
  },
  {
    path: '/login',
    element: Login
  },
  {
    path: '/signup',
    element: Signup
  },
  {
    path: '/unauthorized',
    element: Unauthorized
  }
];