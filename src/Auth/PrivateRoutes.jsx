import React, { Children, useContext } from 'react';
import { AunthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {loading,user} = useContext(AunthContext);
   
    if(loading == true){
        return <h1>loading Data</h1>
    }

    if(user == null){
        return <Navigate to="/login"></Navigate>
    }else{
        return Children
    }
};

export default PrivateRoutes;