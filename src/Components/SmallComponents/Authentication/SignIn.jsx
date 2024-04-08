import React, { useState } from 'react'
import { auth } from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
function SignIn() {
  // states
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (event) =>{
      event.preventDefault()
      try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(userCredentials.user.email)
      }catch(err){
        console.log(err);
      }
  }
  return (
    <div>
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