import React from 'react';
import NavigationBer from '../pages/Shared/NavigationBer/NavigationBer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;