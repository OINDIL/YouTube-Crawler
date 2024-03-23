import React, { useState } from 'react'

function SearchBar() {
    const [input,setInput] = useState(null)
    const handleInput = (event) =>{
        setInput(event.target.value)
    }
    // const getData = (value) =>{

    // }
    return (
        <div>
            <div className="container input-group mb-3" style={{maxWidth:'600px'}}>
                <input type="text" className="form-control" placeholder="Search For Youtube Channels" aria-label="Recipient's username" aria-describedby="button-addon2"
                onChange={handleInput}
                />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}

export default SearchBar