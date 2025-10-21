import { RouterProvider } from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import router from './router/Router.jsx'
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Layout from './pages/Layout.jsx';
import AuthGuard from './components/AuthGuard.jsx';
import Profile from './pages/AuthPages/Profile.jsx';
import Dashboard from './pages/AuthPages/Dashboard.jsx';
import Settings from './pages/AuthPages/Settings.jsx';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from './context/AuthContext.jsx';

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
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route element={<AuthGuard />}>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;