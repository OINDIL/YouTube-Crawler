import React from 'react'
import ReactDOM from 'react-dom/client'
import ChannelData from './Components/ChannelsData.jsx';
import Videos from './Components/Videos.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/SmallComponents/Navbar.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><ChannelData/></>
  },
  {
    path:'/videos',
    element:<><Navbar/><Videos/></>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
