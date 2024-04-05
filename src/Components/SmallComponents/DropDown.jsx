import React from 'react'

function DropDown({maxResults, setMaxResults}) {
    const handleMaxResults = (num) =>{
        setMaxResults(num)
    }
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Max Results: {maxResults}
                </button>
                <ul className="dropdown-menu text-center" style={{cursor:'pointer'}}>
                    <li><a className="dropdown-item" onClick={()=>handleMaxResults(5)}>5</a></li>
                    <li><a className="dropdown-item" onClick={()=>handleMaxResults(15)}>15</a></li>
                    <li><a className="dropdown-item" onClick={()=>handleMaxResults(25)}>25</a></li>
                    <li><a className="dropdown-item" onClick={()=>handleMaxResults(35)}>35</a></li>
                    <li><a className="dropdown-item" onClick={()=>handleMaxResults(50)}>50</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown 