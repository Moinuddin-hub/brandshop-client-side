import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'  
 import Home from './Page/Home.jsx';
 import AddProduct from './Page/AddProduct.jsx';
import ShowCard from './Components/ShowCard.jsx';
import MyCard from './Components/MyCard.jsx';
import UpdateProduct from './Page/UpdateProduct.jsx';
import Register from './Page/Login/Register.jsx';
import Login from './Page/Login/Login.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
import AuthProvider from './Page/Login/Provider/AuthProvider.jsx';
import PrivateRoute from './Page/Private/PrivateRoute.jsx';
import Details from './Page/Details/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/showCard/:brandName',
        element:<ShowCard></ShowCard>,
         loader:()=> fetch('http://localhost:5000/products')
      },    
      {
        path:'/home',
        element:<Home></Home>,
        loader : ()=> fetch('/data.json')
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/myCard',
        element:<MyCard></MyCard>,
        loader:()=> fetch('http://localhost:5000/products')
      },
      {
        path:'updateProduct/:_id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params._id}`)  
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
          path:'details/:_id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/products/${params._id}`)  
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
