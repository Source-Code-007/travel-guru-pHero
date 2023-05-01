import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import { app } from '../configFile/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')

    // sign up with email and pass func
    const createUserEmailPassFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, password)
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


    const authObj = {
        user,
        setUser,
        createUserEmailPassFunc,
        updateUserProfileFunc,
        emailVerficationFunc
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>)

};

export default AuthContext;