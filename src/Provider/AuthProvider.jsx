import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext = createContext(null)


const auth = getAuth(app)

const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user,SetUser]  = useState(null);
    const [loading,setLoading] = useState(true);

    const creatUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
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
    const logOut = () =>{
        setLoading(true);
        signOut(auth);
    }
    const signInWIthGoogle = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
          })
          .catch(error =>{
            console.log(error)
          })
    }
    const signInWithGit = () =>{
        signInWIthGoogle(auth,gitProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
          })
          .catch(error =>{
            console.log(error)
          })
    }
      
    useEffect(()=>{

       const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
           console.log('loggedin user', loggedUser)
           SetUser(loggedUser)
           setLoading(false)
        })
        return(()=>{
            unsubscribe();
        })
    },[])


    const authInfo = {
        user ,
        loading,
        creatUser,
        signIn,
        updateUserData,
        logOut,
        signInWIthGoogle,
        signInWithGit
        


    };
   
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;