import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
       return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;