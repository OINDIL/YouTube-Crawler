import React, { useState } from 'react'
import { auth } from '../../Firebase/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import PopUp from './Small Components/PopUp'
import { useAllContext } from '../../Context/AllContextAPI'
import LoadingBar from 'react-top-loading-bar'

function SignUp() {
    const { progress, setProgress } = useAllContext()
    // STATES
    const [popUp, setPopUp] = useState(false)
    const [loader, setLoader] = useState(false)
    const [ErrorLoader, setErrorLoader] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoader(true)
        try {
            setProgress(25)
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            setProgress(50)
            const user = userCredentials.user
            setProgress(75)
            await updateProfile(user, {
                displayName: name
            })
            setProgress(100)
            setPopUp(true)
        } catch (err) {
            setProgress(100)
            setErrorLoader(true)
        }
    }
    return (
        <div>
            {popUp ? <PopUp title={'Signed Up'} description={'You Have Signed Up Successfully'} /> : null}
            {loader ? (
                <LoadingBar
                    color="#0d6efd"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
            ) : null}
            <div className="error-loader position-relative">
                {ErrorLoader ? (
                    <ErrorMessage
                        title={"Account Creation Error"}
                        message={"Can't Creat an Account"}
                        buttonMessage={"Try Again"}
                        setErrorLoader={setErrorLoader}
                    />
                ) : null}
            </div>
            <form className='container' onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '70px' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="current-password" className="form-control" id="exampleInputPassword1" placeholder='Create A Strong Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp