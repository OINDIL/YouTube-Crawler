import React from 'react'

function Alert({message,type,setButton}) {
    return (
        <div>
            <div className={`alert alert-${type}`} role="alert">
            <button type="button" className="btn-close" aria-label="Close"
            style={{position:'absolute', zIndex:1, right:'10px'}}
            onClick={()=>setButton(false)}
            ></button>
                {message}
            </div>

        </div>
    )
}

export default Alert