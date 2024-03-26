import React, { useState } from 'react'

function SearchBar({getData}) {
    const [input,setInput] = useState(null)
    const handleInput = (event) =>{
        setInput(event.target.value)
    }
    const handleClick = () =>{
        getData(input)
    }
    return (
        <div>
            <div className="container input-group mb-3" style={{maxWidth:'600px'}}>
                <input type="text" className="form-control" placeholder="Search on YouTube" aria-label="Recipient's username" aria-describedby="button-addon2"
                onChange={handleInput}
                />
                    <button className="btn btn-danger" type="button" id="button-addon2" onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar