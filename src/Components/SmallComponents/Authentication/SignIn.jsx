import React, { useState } from 'react'
import { auth } from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import LoadingBar from 'react-top-loading-bar'
import { useAllContext } from '../../Context/AllContextAPI'
import { Link } from 'react-router-dom'
import Alert from './Small Components/Alert'

function SignIn() {
  const { progress, setProgress } = useAllContext()
  // states

  const [loader, setLoader] = useState(false)
  const [ErrorLoader, setErrorLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [successSignedUp, setSuccessSignedUp] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault()
    if (email === '' || password === '') {
      setErrorLoader(true)
      return
    }
    setLoader(true)
    setProgress(30)
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const name = userCredentials.user.displayName;
      setProgress(70)
      setName(name)
      setSuccessSignedUp(true)
      setProgress(100)
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
          color="#198754"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      ) : null}
      <div className="container d-flex justify-content-center align-items-center" style={{minHeight:'100svh'}}>
        <div className="w-100" style={{maxWidth:'500px'}}>
        <form className='border rounded p-3 shadow' onSubmit={handleSubmit}>
          <div className="error-loader position-relative">
            {ErrorLoader ? (
              <Alert message={"Invalid Credentials"} type={"danger"} setButton={setErrorLoader} />
            ) : null}
            {successSignedUp ? <Alert message={`You are logged in as ${name}`} type={"success"} setButton={setSuccessSignedUp} /> : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='mail@mail.com' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-medium">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p className='fw-medium'>Create an account instead, <Link to="/signup" className='text-decoration-none'>Sign Up</Link></p>
          <button type="submit" className="btn btn-success" disabled={successSignedUp || loader || ErrorLoader}>Sign In</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn