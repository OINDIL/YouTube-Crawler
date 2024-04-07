import React,{useState} from 'react'

function SignUp() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        // todo
    }
    return (
        <div>
            <form className='container' onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '70px' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" placeholder='Enter Your Name'
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="current-password" className="form-control" id="exampleInputPassword1" placeholder='Create A Strong Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp