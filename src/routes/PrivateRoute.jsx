import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProviderContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthProviderContext)
    if (loading) {
        return <progress className="progress w-56 text-center mx-auto"></progress>

    }
    if (user) {
        return children

    }
    return (
        <Navigate to={"/login"} state={location} replace>

        </Navigate>
    );
};

export default PrivateRoute;