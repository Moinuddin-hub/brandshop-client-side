import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, signOut,updateProfile } from "firebase/auth";
import { auth } from '../../../firebase-config';

export const AuthContext=createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const[user,setUser]=useState({});
//  googleLogin
const googleLogin=()=>{
    return signInWithPopup(auth, googleProvider)
}
// Register
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login
const singIn=(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    return signOut(auth);
}
const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
         setUser(user)
      });
},[])

 const info={
       googleLogin,
       createUser,
       singIn,
       user,
       logOut,
       handleUpdateProfile
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;