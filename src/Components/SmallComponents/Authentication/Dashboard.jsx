import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GoUnverified } from "react-icons/go";

export default function Dashboard() {
    // CONTEXTS
    const { currentUser, logOut } = useAuth()

    //STATES
    const [ErrorLoader,setErrorLoader] = useState(false)
    const navigation = useNavigate()
    const handleLogOut = async () => {
        try {
            await logOut()
            navigation("/signin")
        } catch (error) {
            setErrorLoader(true)
        }
    };
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
                <div className="w-100" style={{ maxWidth: '500px' }}>
                    <form className='container border rounded p-3 shadow' style={{ maxWidth: '600px', marginTop: '70px' }}>
                        {ErrorLoader ? (
                            <Alert message={"Account Creation Error"} type={"danger"} setButton={setErrorLoader} />
                        ) : null}
                        <h2 className='text-center'>DashBoard</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address {currentUser.emailVerified ? <RiVerifiedBadgeFill/> : <GoUnverified/>}</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={currentUser.email} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label fw-medium">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" value={currentUser.displayName} disabled />
                        </div>
                        <button type="submit" className="btn btn-danger" onClick={handleLogOut} style={{ marginRight: '3px' }}>Log Out</button>
                        <button type="submit" className="btn btn-primary"><Link className='text-decoration-none text-light' to="/update-profile">Update Profile</Link></button>
                    </form>
                </div>
            </div>
        </>
    )
}
