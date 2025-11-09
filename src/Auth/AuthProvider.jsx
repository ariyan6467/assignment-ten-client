import React, { createContext } from 'react';


export const AunthContext = createContext(null);
const AuthProvider = ({children}) => {

    const authINfo ={
        name:"masud"
    }
    return (
       <AunthContext.Provider value={authINfo}>
        {children}
       </AunthContext.Provider>
    );
};

export default AuthProvider;