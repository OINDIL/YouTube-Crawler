import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../Firebase/firebase'
import { createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,signOut,updateEmail,updatePassword,updateProfile } from 'firebase/auth';

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
    const updateEmailFunc = (user,email) =>{
        return updateEmail(user,email)
    } 
    const updatePasswordFunc = (user,password) =>{
        return updatePassword(user,password)
    }
    const updateDisplayName = (user,displayName) =>{
        return updateProfile(user,{
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
        updatePasswordFunc,
        updateDisplayName,

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
