// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../firebase/firebase.config';


// export const AunthContext = createContext(null);
// const LoadingContext = createContext();

// export const useLoader = () =>{
//   return useContext(LoadingContext);
// }
// const googleProvider = new GoogleAuthProvider();
// const AuthProvider = ({children}) => {
//    const[user,setuser] = useState(null);
//      const[loading,SetLoading] =  useState(true);
//      const[details,setDetails] = useState(null);
//      const [loader,setLoader] = useState(false);
      
//    console.log(user);

//     const startLoading = () => setLoader(true);
//     const stopLoading =() => setLoader(false);
  

//     function handleCreateUser(email,password){
//          SetLoading(true);
//         return createUserWithEmailAndPassword(auth,email,password);
//     }

//     function handleGoogleSignIn(){
//          SetLoading(true);
//         return signInWithPopup(auth,googleProvider);
         
//     }

//     function handleSignIn(email,password){
//          SetLoading(true);
//           return signInWithEmailAndPassword(auth,email,password)
//     }

//     function handleSignOut(){
//         return signOut(auth);
//     }

//     function handleupdateData(user,profileData){
//       return updateProfile(user,profileData);
//     }
  
//      useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//         console.log(currentUser);
//        setuser(currentUser);
//        SetLoading(false);
       
//     });
//     return () => unSubscribe();
//   }, []);
//     const authINfo ={
//        handleCreateUser,loading,SetLoading,
//        user,setuser,
//        handleGoogleSignIn,
//        handleSignIn,
//        handleSignOut,
//        handleupdateData,
//      details,setDetails,
//      loader,startLoading,stopLoading
//     }
//     return (
//        <AunthContext.Provider value={authINfo}>
//         {children}
//        </AunthContext.Provider>
//     );
// };

// export default AuthProvider;







//more auth provider



import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AunthContext = createContext(null);



const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
  

  

  function handleCreateUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleGoogleSignIn() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  function handleSignIn(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleSignOut() {
    return signOut(auth);
  }

  function handleUpdateData(user, profileData) {
    return updateProfile(user, profileData);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Provide the loading context to children
  const authInfo = {
    handleCreateUser,
    loading,
    setLoading,
    user,
    setUser,
    handleGoogleSignIn,
    handleSignIn,
    handleSignOut,
   handleUpdateData,
    details,
    setDetails,
   
  };

  return (
    <AunthContext.Provider value={authInfo}>
     
        {children}
     
    </AunthContext.Provider>
  );
};

export default AuthProvider;
