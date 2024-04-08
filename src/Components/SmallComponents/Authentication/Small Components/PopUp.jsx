import React from 'react'
import { Link } from 'react-router-dom'
function PopUp({title,description,route,routeName}) {
    return (
        <div>
            <div className="card position-absolute z-3 top-0 start-50 translate-middle-x" style={{width:'18rem',marginTop:'70px'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to='/' className="btn btn-primary">Channels</Link>
                    <Link to='/videos' className="btn btn-success" style={{marginLeft:'4px'}}>Videos</Link>
                </div>
            </div>
        </div>
    )
}

export default PopUp