import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import Alert from './Small Components/Alert'
import LoadingBar from 'react-top-loading-bar'
function ForgotPassword() {
    // CONTEXT
    const { resetPassword } = useAuth()
    // STATES
    const [loader, setLoader] = useState(false)
    const [progress, setProgress] = useState(0)
    const [ErrorLoader, setErrorLoader] = useState(false)
    const [successPassword, setSuccessPassword] = useState(false)
    const [email, setEmail] = useState('')
    const handleForgotPassword = async (event) => {
        event.preventDefault()
        setLoader(true)
        if (email === '') {
            setErrorLoader(true)
            setProgress(100)
            return
        }
        try {
            setProgress(40)
            await resetPassword(email)
            setProgress(90)
            setSuccessPassword(true)
            setProgress(100)
        }
        catch {
            setErrorLoader(true)
        }
    }
    return (
        <div>
            {loader ? <LoadingBar
                color="#198754"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            /> : null}
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
                <div className="w-100" style={{ maxWidth: '500px' }}>
                    <form className='border rounded p-3 shadow' onSubmit={handleForgotPassword}>
                        <div className="error-loader position-relative">
                            {ErrorLoader ? (
                                <Alert message={"Invalid Credentials"} type={"danger"} setButton={setErrorLoader} />
                            ) : null}
                            {successPassword ? <Alert message={`Check Your Inbox`} type={"success"} setButton={setSuccessPassword} /> : null}
                        </div>
                        <h2 className='text-center'>Reset Password</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <p className='fw-medium'>Create an account instead, <Link to="/signup" className='text-decoration-none'>Sign Up</Link></p>
                        <button type="submit" className="btn btn-success">Reset</button>
                        <Link to='/signin' style={{ marginLeft: '5px', textDecoration: 'none' }}>Sign In</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword