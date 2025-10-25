import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, useState, useEffect, useContext } from 'react';
import './App.css';
import Layout from './pages/Layout.jsx';
import AuthGuard from './components/AuthGuard.jsx';
import RoleGuard from './components/RoleGuard.jsx';
import AuthContext from './context/AuthContext.jsx';
import axios from 'axios';

// Route configurations
import { publicRoutes } from './routes/PublicRoutes';
import { userRoutes } from './routes/UserRoutes';
import { editorRoutes } from './routes/EditorRoutes';
import { adminRoutes } from './routes/AdminRoutes';

function App() {
  const { pageLoader } = useContext(AuthContext);

  // Api Issue check
  const [apiError, setApiError] = useState(null);
  useEffect(() => {
    axios.get('https://68edf0acdf2025af7801a96c.mockapi.io/users')
      .then(() => setApiError(null))
      .catch(() => setApiError('API issue: Unable to connect!, Refresh page'));
  }, []);

  // Page Loader 
  if (pageLoader) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}><h4>Page Loader</h4></div>;
  }

  return (
    <>
      {apiError && <div style={{ color: 'red' }}>{apiError}</div>}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              {publicRoutes.map(route => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
              
              {/* User Routes - Protected by AuthGuard */}
              <Route element={<AuthGuard />}>
                <Route element={<RoleGuard roles={['user', 'editor', 'admin']} />}>
                  {userRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                  ))}
                </Route>

                {/* Editor Routes */}
                <Route element={<RoleGuard roles={['editor', 'admin']} />}>
                  {editorRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                  ))}
                </Route>

                {/* Admin Routes */}
                <Route element={<RoleGuard roles={['admin']} />}>
                  {adminRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                  ))}
                </Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App;