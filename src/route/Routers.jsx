import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catacory from '../pages/Home/Catacory/Catacory';

import News from '../pages/News/News/News';
import NewsLayout from '../layout/NewsLayout';
import LoginLayout from '../layout/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register';
// import LoginLayout from '../layout/LoginLayout/LoginLayout';
// import Login from '../pages/Login/Login/Login';
// import Register from '../pages/Login/Register/Register';
// import Register from '../pages/Login/Register/Register';

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
           {
            path:'/',
            element:<Navigate to='/catacory/0'></Navigate>
           },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }

        ]
    },
    {
        path:'catacory',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Catacory></Catacory>,
                loader:({params})=> fetch(`http://localhost:3000/catacory/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
         {
            path:':id',
            element:<News></News>,
            loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
         }
        ]
    }
]);

export default router;
