import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Alert from './Small Components/Alert'
import { useAllContext } from '../../Context/AllContextAPI'
import LoadingBar from 'react-top-loading-bar'

export default function UpdateProfile() {
    const { updateEmailFunc, updatePasswordFunc, updateDisplayName, currentUser } = useAuth()
    const { progress, setProgress } = useAllContext()
    //STATES
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [ErrorLoader, setErrorLoader] = useState(false)
    const [loader, setLoader] = useState(false)


    const navigation = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoader(true)
        const promises = []
        if (currentUser.email !== email) {
            promises.push(updateEmailFunc(email))
        }
        setProgress(30)
        if(password !== ''){
            promises.push(updatePasswordFunc(password))
        }
        setProgress(60)
        if (name !== '') {
            promises.push(updateDisplayName(name))
        }
        setProgress(90)
        Promise.all(promises).then(function () {
            navigation('/dashboard')
        }).catch(() => {
            setErrorLoader(true)
        }).finally(() => {
            setProgress(100)
            setLoader(false)
        })

    }

    return (
        <div>
            {loader ? (
                <LoadingBar
                    color="#198754"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
            ) : null}
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
                <div className="w-100" style={{ maxWidth: '500px' }}>
                    <form className='container border rounded p-3 shadow' style={{ maxWidth: '600px', marginTop: '70px' }} onSubmit={handleSubmit}>
                        {ErrorLoader ? (
                            <Alert message={"Can't Update Account"} type={"danger"} setButton={setErrorLoader} />
                        ) : null}
                        <h2 className='text-center'>Update Profile</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={currentUser.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label fw-medium">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" defaultValue={currentUser.displayName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputOldPassword" className="form-label fw-medium">New Password</label>
                            <input type="text" className="form-control" id="exampleInputOldPassword" aria-describedby="emailHelp" placeholder='Enter New Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-success' style={{ marginRight: '4px' }}disabled={loader}>Save</button>
                        <a className="btn btn-primary" href="/dashboard" role="button">Go Back</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
