import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
   // const data = true;
    const token = useSelector((state) => state.auth.token)
    
        //console.log("finish", token)
    return token ? <Outlet /> : <Navigate to={"/signup"} replace/>;
}

export default ProtectedRoute