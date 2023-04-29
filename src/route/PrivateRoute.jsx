import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            PrivateRoute
        </div>
    );
};

export default PrivateRoute;