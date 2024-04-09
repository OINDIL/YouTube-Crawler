import React, { useState } from 'react'
import { auth } from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import PopUp from './Small Components/PopUp'
import LoadingBar from 'react-top-loading-bar'
import { useAllContext } from '../../Context/AllContextAPI'
import ErrorMessage from '../ErrorMessage'

function SignIn() {
  const {progress,setProgress} = useAllContext()
  // states
  
  const [loader,setLoader] = useState(false)
  const [ErrorLoader,setErrorLoader] = useState(false)
  const [popUp,setPopUp] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const handleSubmit = async (event) =>{
      event.preventDefault()
      setLoader(true)
      setProgress(30)
      try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        const name = userCredentials.user.displayName;
        setProgress(70)
        setName(name)
        setPopUp(true)
        setProgress(100)
      }catch(err){
        setErrorLoader(true)
        setProgress(100)
      }
  }
  return (
    <div>
      {popUp ? <PopUp title={ `Welcome ${name}` } description={'You are now logged in'}/> : null}
      {loader ? (
        <LoadingBar
          color="#198754"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      ) : null}
      <div className="error-loader position-relative">
        {ErrorLoader ? (
          <ErrorMessage
            title={"Wrong Credentials"}
            message={"Review Your Given Data"}
            buttonMessage={"Try Again"}
            setErrorLoader={setErrorLoader}
          />
        ) : null}
      </div>
      <form className='container' onSubmit={handleSubmit} style={{maxWidth:'600px',marginTop:'70px'}}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='mail@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-success">Sign In</button>
    </form>
    </div>
  )
}

export default SignIn