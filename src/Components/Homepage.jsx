import React, { useEffect, useState } from 'react'
import SearchBar from './SmallComponents/SearchBar'
import Card from './SmallComponents/Card'
import Empty from './SmallComponents/Empty'
function Homepage() {
    // states
    const [youtubeData,setYoutubeData] = useState([])


    const youtubeApi = async (query) =>{
        try{
            const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=AIzaSyAbtu-vPTd_dCckkdsSimbzq2MC41B0dxw`
            const data = await fetch(URL)
            const obj = await data.json()
            // return obj
            const {items} = obj
            setYoutubeData(items)
        }
        catch(err){
            alert(err)
        }
    }
    useEffect(()=>{
        // youtubeApi('python')
    },[])
    console.log(youtubeData);
  return (
    <div>
        <div className="container mt-3">
            <SearchBar/>
        </div>
        {youtubeData.length !== 0 ? <div className="container-fluid d-flex flex-wrap">
            {youtubeData.map((item)=>{
                return(
                    <div key={item.snippet.title}>
                        <Card title={item.snippet.channelTitle} description={item.snippet.description}
                        thumbnail={item.snippet.thumbnails.default}/>
                    </div>
                )
            })}
        </div> : <Empty/>}
        
    </div>
  )
}

export default Homepage