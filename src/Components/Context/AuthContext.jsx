import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../Firebase/firebase'
import { createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,sendEmailVerification,signInWithEmailAndPassword,signOut,updateEmail,updatePassword,updateProfile } from 'firebase/auth';

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext); // useAuth will be imported to all the files

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }
    const verifyEmail = (user) =>{
        return sendEmailVerification(user)
    }
    const updateEmailFunc = (email) =>{
        return updateEmail(currentUser,email)
    } 
    const updatePasswordFunc = (password) =>{
        return updatePassword(currentUser,password)
    }
    const updateDisplayName = (displayName) =>{
        return updateProfile(currentUser,{
            displayName
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            setLoading(false)
        })
 
        return unsubscribe
    },[])

    const value = {
        currentUser,
        signUp,
        login,
        logOut,
        resetPassword,
        updateEmailFunc,
        verifyEmail,
        updatePasswordFunc,
        updateDisplayName,

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
