import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(authContext)
    const location = useLocation()
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;