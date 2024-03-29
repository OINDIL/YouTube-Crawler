import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Components/Homepage.jsx';
import Videos from './Components/SmallComponents/Videos.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>
  },
  {
    path:'/videos',
    element:<Videos/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
