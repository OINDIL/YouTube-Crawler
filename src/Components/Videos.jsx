import React from 'react'
import SearchBar from './SmallComponents/SearchBar'

const Videos = () => {
    const getData = (value) =>{
        console.log(value)
    }
    return (
        <div>
            <div className="container mt-3">
                <SearchBar getData={getData}/>
            </div>
        </div>
    )
}

export default Videos