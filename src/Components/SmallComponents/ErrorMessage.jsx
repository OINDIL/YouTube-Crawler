import React from 'react'

function ErrorMessage({title, message, buttonMessage, setErrorLoader}) {
    return (
        <div>
            <div className="card position-absolute z-3 top-0 start-50 translate-middle-x" style={{width:'18rem'}}>
                    <div className="card-body text-center shadow">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{message}</p>
                        <button className="btn btn-success" onClick={()=>setErrorLoader(false)}>{buttonMessage}</button>
                    </div>
            </div>
        </div>
    )
}

export default ErrorMessage