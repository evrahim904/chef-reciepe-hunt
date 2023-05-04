import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user  = null;
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserData = (user,name,photo) =>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log("user updated")
        })
        .catch(error =>{
            console.log(error)
        })
    }



    const authInfo = {
        user ,
        creatUser,
        signIn,
        updateUserData

    };
   
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;