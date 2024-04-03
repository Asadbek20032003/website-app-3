import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../component/pages/Home"
 import Support from '../component/pages/Support';
 import Products from '../component/pages/Products';
 import Services from '../component/pages/Services';
 

 const router = createBrowserRouter ([
   {
    path: '/',
    element : <Layout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/services',
          element: <Services />
      },
      {
        path: '/products',
        element: <Products />
    },
    {
      path: '/Support',
      element: <Support/>
  },
    ]
   }
 ]) 

 export default router;