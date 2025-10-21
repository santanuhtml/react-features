import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Profile from "../pages/AuthPages/Profile";
import AuthGuard from "../components/AuthGuard";
import Dashboard from "../pages/AuthPages/Dashboard";
import Settings from "../pages/AuthPages/Settings";
import About from "../pages/About";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
              
    },
    {
        path:'/about',
        element: <About/>
              
    },
    {
        path:'/login',
        element: <Login/>
              
    },
    {
        path:'/signup',
        element: <Signup/>
              
    },
    {
        path:'/',
        element: <AuthGuard/>,
        children: [
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'settings',
                element: <Settings/>
            }
        ]
              
    }
])

export default router;