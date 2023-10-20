import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, signOut,updateProfile } from "firebase/auth";
import { auth } from '../../../firebase-config';

export const AuthContext=createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const[user,setUser]=useState({});
    const [loading, setLoading] = useState(true)
//  googleLogin
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
// Register
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login
const singIn=(email,password)=>{
    setLoading(true)
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
         setUser(user);
         setLoading(false);
      });
},[])

 const info={
       googleLogin,
       createUser,
       singIn,
       user,
       logOut,
       handleUpdateProfile,
       loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;