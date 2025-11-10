import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AunthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const[user,setuser] = useState(null);
     const[loading,SetLoading] =  useState(true);
   console.log(user);


  

    function handleCreateUser(email,password){
         SetLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function handleGoogleSignIn(){
         SetLoading(true);
        return signInWithPopup(auth,googleProvider);
         
    }

    function handleSignIn(email,password){
         SetLoading(true);
          return signInWithEmailAndPassword(auth,email,password)
    }

    function handleSignOut(){
        return signOut(auth);
    }

    function handleupdateData(user,profileData){
      return updateProfile(user,profileData);
    }
  
     useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
       setuser(currentUser);
       SetLoading(false);
       
    });
    return () => unSubscribe();
  }, []);
    const authINfo ={
       handleCreateUser,loading,
       user,setuser,
       handleGoogleSignIn,
       handleSignIn,
       handleSignOut,
       handleupdateData
    }
    return (
       <AunthContext.Provider value={authINfo}>
        {children}
       </AunthContext.Provider>
    );
};

export default AuthProvider;