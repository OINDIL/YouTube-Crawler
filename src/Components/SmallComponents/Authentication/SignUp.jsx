import React, { useState } from 'react'
import { updateProfile } from 'firebase/auth'
import { useAllContext } from '../../Context/AllContextAPI'
import LoadingBar from 'react-top-loading-bar'
import { Link } from 'react-router-dom'
import Alert from './Small Components/Alert'
import { useAuth } from '../../Context/AuthContext'

function SignUp() {
    // CONTEXTS
    const { progress, setProgress } = useAllContext()
    const { signUp,verifyEmail } = useAuth()
    // STATES
    const [successSignedUp, setSuccessSignedUp] = useState(false)
    const [loader, setLoader] = useState(false)
    const [ErrorLoader, setErrorLoader] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword || email === '' || password === '' || name === '' || password.length < 8) {
            setErrorLoader(true)
            return
        }
        setLoader(true)
        try {
            setProgress(25)
            const userCredentials = await signUp(email, password)
            setProgress(50)
            const user = userCredentials.user
            setProgress(75)
            await updateProfile(user, {
                displayName: name.toUpperCase()
            })
            await verifyEmail(user)
            setProgress(100)
            setSuccessSignedUp(true)
            setLoader(false)
        } catch (err) {
            setProgress(100)
            setLoader(false)
            setErrorLoader(true)
        }
    }
    return (
        <div>
            {loader ? (
                <LoadingBar
                    color="#0d6efd"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
            ) : null}
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
                <div className="w-100" style={{ maxWidth: '500px' }}>
                    <form className='container border rounded p-3 shadow' onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '70px' }}>
                        <div className="error-loader position-relative">
                            {ErrorLoader ? (
                                <Alert message={"Account Creation Error"} type={"danger"} setButton={setErrorLoader} />
                            ) : null}
                            {successSignedUp ? <Alert message={"Account Created Successfully"} type={"success"} setButton={setSuccessSignedUp} /> : null}
                        </div>
                        <h2 className='text-center'>Sign Up</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label fw-medium">Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" placeholder='Enter Your Name'
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-medium">Password</label>
                            <input type="current-password" className="form-control" id="exampleInputPassword1" placeholder='Create A Password' onChange={(e) => setPassword(e.target.value)} />
                            <div id="emailHelp" className="form-text">Create a strong password of more than 8 characters.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPasswordconfirm1" className="form-label fw-medium">Confirm Password</label>
                            <input type="current-password" className="form-control" id="exampleInputPasswordconfirm1" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <p className='fw-medium'>Already have an account? <Link className='text-decoration-none' to="/signin">Log In</Link></p>
                        <button type="submit" className="btn btn-primary" disabled={successSignedUp || loader || ErrorLoader}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp