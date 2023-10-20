import React, { useContext } from 'react';
import { AuthContext } from '../Login/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);


    // we'hv to wait here 
    if (loading) return <h1 className="text-5xl">Loading</h1>
    // 

    if (!user?.email) {
        return <Navigate to='/login' />
    }



    return children;
};

export default PrivateRoute;