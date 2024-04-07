import React from 'react'

function SignIn() {
  return (
    <div>
      <form className='container' style={{maxWidth:'600px',marginTop:'70px'}}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='mail@mail.com'/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'/>
      </div>
      <button type="submit" className="btn btn-success">Sign In</button>
    </form>
    </div>
  )
}

export default SignIn