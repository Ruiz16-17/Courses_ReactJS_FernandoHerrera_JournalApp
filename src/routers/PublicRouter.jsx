import React from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children, isLoggedIn }) => {

    return !isLoggedIn
        ? children
        : <Navigate to='/' />

}
