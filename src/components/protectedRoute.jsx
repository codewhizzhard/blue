import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const data = true;

    return data ? <Outlet /> : <Navigate to={"/signup"} replace/>;
}

export default ProtectedRoute