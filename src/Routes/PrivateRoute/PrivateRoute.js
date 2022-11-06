import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;