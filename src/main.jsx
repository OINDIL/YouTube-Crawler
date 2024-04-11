import React from 'react'
import ReactDOM from 'react-dom/client'
import ChannelData from './Components/ChannelsData.jsx';
import Videos from './Components/Videos.jsx';
import { ValueFormatterProvider } from './Components/Context/AllContextAPI.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/SmallComponents/Navbar.jsx';
import SignIn from './Components/SmallComponents/Authentication/SignIn.jsx';
import SignUp from './Components/SmallComponents/Authentication/SignUp.jsx';
import { AuthProvider } from './Components/Context/AuthContext.jsx';
import Dashboard from './Components/SmallComponents/Authentication/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><ChannelData /></>
  },
  {
    path: '/videos',
    element: <><Navbar /><Videos /></>
  },
  {
    path: '/signin',
    element: <><Navbar /><SignIn /></>
  },
  {
    path: '/signup',
    element: <><Navbar /><SignUp /></>
  },
  {
    path: '/dashboard',
    element: <><Navbar /><Dashboard /></>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ValueFormatterProvider>
        <RouterProvider router={router} />
      </ValueFormatterProvider>
    </AuthProvider>
  </React.StrictMode>
)
