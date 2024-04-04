import React from 'react'

function Empty({data}) {
    return (
        <div>
            <div className="container card position-relative shadow" style={{width:'18rem'}}>
                    <div className="card-body">
                        <p className="card-text fw-bold">{data}</p>
                    </div>
            </div>
        </div>
    )
}

export default Empty