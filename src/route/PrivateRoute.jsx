import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext)

    if(user){
        return Children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;