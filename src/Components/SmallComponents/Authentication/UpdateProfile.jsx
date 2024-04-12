import React from 'react'
import { useAuth } from '../../Context/AuthContext'

export default function UpdateProfile() {
    const { updateEmailFunc, updatePasswordFunc,currentUser } = useAuth()


    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
                <div className="w-100" style={{ maxWidth: '500px' }}>
                    <form className='container border rounded p-3 shadow' style={{ maxWidth: '600px', marginTop: '70px' }}>
                        <h2 className='text-center'>Update Profile</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={currentUser.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label fw-medium">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" defaultValue={currentUser.displayName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label fw-medium">Phone Number</label>
                            <input type="text" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" defaultValue={!currentUser.phoneNumber ? 'Not Given' : currentUser.phoneNumber} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
