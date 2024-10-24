import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Home from './Home';
import AboutUs from './components/pages/AboutUs';
import ConnectPage from './components/pages/Connect';
import RootLayOut from './components/pages/RootLayOut';
import ErrorPage from './components/pages/ErorrPage';
function App() {

const router = createBrowserRouter([
    {path:'/',element:<RootLayOut/>, errorElement:<ErrorPage/>,
        children:[
            {path:'/',element:<Home/>},
            {path:'/about-us',element:<AboutUs/>},
            {path:'/connect',element:<ConnectPage/>}
        ]
    },
   
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
