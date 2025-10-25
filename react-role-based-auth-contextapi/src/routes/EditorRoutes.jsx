import { lazy } from 'react';
const ContentDashboard = lazy(() => import('../pages/editor/ContentDashboard'));
const Articles = lazy(() => import('../pages/editor/Articles'));
const MediaLibrary = lazy(() => import('../pages/editor/MediaLibrary'));

export const editorRoutes = [
  {
    path: '/editor/dashboard',
    element: ContentDashboard
  },
  {
    path: '/editor/articles',
    element: Articles
  },
  {
    path: '/editor/media',
    element: MediaLibrary
  }
];