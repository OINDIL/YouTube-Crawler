import React from 'react'
import {useAllContext} from '../Context/AllContextAPI'
function ApiKey({apiKey}) {
    const {setApiKey,apiName,setApiName} = useAllContext()
    
    
    // const apiKeys = [
    //     {name:'None', key:''},
    //     {name:'API 1', key:'AIzaSyBJQP4LAiQBUA5q_Y_plVQg6hn2dIQFdFg'},
    //     {name:'API 2', key:'AIzaSyAbtu-vPTd_dCckkdsSimbzq2MC41B0dxw'}
    // ]
    const handleApiKeyName = (key,name) =>{
        setApiKey(key)
        setApiName(name)
    }

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    API key: {apiName}
                </button>
                <ul className="dropdown-menu" style={{cursor:'pointer'}}>
                    {apiKey.map((item)=>(
                        <div key={item.id}>
                            <li><a className="dropdown-item" onClick={()=>handleApiKeyName(item.mainApiKeys,item.mainApiKeys)}>{item.mainApiKeys}</a></li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ApiKey