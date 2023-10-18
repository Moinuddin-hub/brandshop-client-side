import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'  
 import Home from './Page/Home.jsx';
 import AddProduct from './Page/AddProduct.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader : ()=> fetch('/data.json')


      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>,
      
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
