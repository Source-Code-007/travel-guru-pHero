import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../configFile/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // signup with email and pass func
    const createUserEmailPassFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and pass func
    const signinUserEmailPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile func
    const updateUserProfileFunc = (currUser, name)=>{
        return updateProfile(currUser, {
            displayName: name, photoURL: null
          })
    }

    // email verification func
    const emailVerficationFunc = (currUser)=>{
        return sendEmailVerification(currUser)
    }

    // sign out func
    const signoutFunc = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            setLoading(false)
            setUser(currUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authObj = {
        user,
        setUser,
        createUserEmailPassFunc,
        updateUserProfileFunc,
        emailVerficationFunc,
        signinUserEmailPassFunc,
        signoutFunc,
        loading
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>)

};

export default AuthContext;