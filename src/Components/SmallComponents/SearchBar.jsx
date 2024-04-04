import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'

function SearchBar({ getData }) {
    const [input, setInput] = useState('')
    const [ErrorLoader, setErrorLoader] = useState(false)
    const handleInput = (event) => {
        setInput(event.target.value)
    }
    const handleClick = () => {
        if (input === '') {
            setErrorLoader(true)
            return
        }
        getData(input)
    }
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            if (input === '') {
                setErrorLoader(true)
                return
            }
            getData(input)
        }
    }
    return (
        <div>
            <div className="error-loader position-relative">
                {ErrorLoader ? <ErrorMessage title={'Empty Input Field'} message={'Enter Some Keywords to Search'} buttonMessage={'Search Again'} setErrorLoader={setErrorLoader} /> : null}
            </div>
            <div className="container input-group mb-4" style={{ maxWidth: '600px', marginTop: '4rem' }}>
                {ErrorLoader ? <>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"
                    disabled
                />
                <button className="btn btn-danger" type="button" id="button-addon2" disabled>Search</button>
                </> 
                :
                <>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"
                    onChange={handleInput}
                    onKeyDown={handleEnterKey}
                />
                <button className="btn btn-danger" type="button" id="button-addon2" onClick={handleClick}>Search</button>
                </>
                }
            </div>
        </div>
    )
}

export default SearchBar