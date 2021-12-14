import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ isLoggedIn, children }) => {

    return isLoggedIn
        ? children
        : <Navigate to={'/auth/login'} />
}
