import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function AdminRouter({children}) {
    const { currentUser } = useAuth()
    return currentUser?.uid === '40KRhuW7K4Vzhj89CDRzEnmlsL12' ? children : <Navigate to='/signin'/>
}
