import React, { useState } from 'react'

function SearchBar({getData}) {
    const [input,setInput] = useState('')
    const handleInput = (event) =>{
        setInput(event.target.value)
    }
    const handleClick = () =>{
        getData(input)
    }
    const handleEnterKey = (event) =>{
        if(event.key === 'Enter'){
            getData(input)
        }
    }
    return (
        <div>
            <div className="container input-group mb-4" style={{maxWidth:'600px',marginTop:'4rem'}}>
                <input type="text" className="form-control" placeholder="Search on YouTube" aria-label="Recipient's username" aria-describedby="button-addon2"
                onChange={handleInput}
                onKeyDown={handleEnterKey}
                />
                    <button className="btn btn-danger" type="button" id="button-addon2" onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar