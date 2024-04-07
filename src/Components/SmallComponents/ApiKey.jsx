import React, { useState } from 'react'
import {useAllContext} from '../Context/AllContextAPI'
function ApiKey() {
    const {setApiKey,apiName,setApiName} = useAllContext()
    
    const apiKeys = [
        {name:'API 1', key:'AIzaSyBJQP4LAiQBUA5q_Y_plVQg6hn2dIQFdFg'},
        {name:'API 2', key:'AIzaSyAbtu-vPTd_dCckkdsSimbzq2MC41B0dxw'}
    ]
    const handleApiKeyName = (key,name) =>{
        setApiKey(key)
        setApiName(name)
    }
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    API key: {apiName}
                </button>
                <ul className="dropdown-menu" style={{cursor:'pointer'}}>
                    {apiKeys.map((item)=>(
                        <div key={item.key}>
                            <li><a className="dropdown-item" onClick={()=>handleApiKeyName(item.key,item.name)}>{item.name}</a></li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ApiKey