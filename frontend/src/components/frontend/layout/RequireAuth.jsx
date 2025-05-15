import React, { useContext } from 'react'
import { AuthContext } from '../../backend/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

    // const RequireAuth = ({children}) => {

    //     const {user} = useContext(AuthContext);

    //     if(!user){
    //         return <Navigate to={'/admin/login'}/>
    //     }

    //     return children;
    // }

    // Jika menggunakan nested Route
    const RequireAuth = () => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to='/admin/login' />;
        }

        return <Outlet />;
    };

export default RequireAuth