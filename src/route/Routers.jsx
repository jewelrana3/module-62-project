import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catacory from '../pages/Home/Catacory/Catacory';

import News from '../pages/News/News/News';
import NewsLayout from '../layout/NewsLayout';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cata/:id',
                element:<Catacory></Catacory>
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
         {
            path:':id',
            element:<News></News>
         }
        ]
    }
]);

export default router;
