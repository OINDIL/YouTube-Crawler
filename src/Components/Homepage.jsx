import React, { useState, useEffect } from 'react'
import SearchBar from './SmallComponents/SearchBar'
import Empty from './SmallComponents/Empty'
import LoadingBar from 'react-top-loading-bar'
import NewCard from './SmallComponents/NewCard'

function Homepage() {
    //! states
    const [youtubeData,setYoutubeData] = useState([])
    const [loader, setLoader] = useState(false)
    const [progress, setProgress] = useState(0)
    
    const videoInfo = async (query) =>{
        setLoader(true)
        try{
            const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=channel&key=${import.meta.env.VITE_API_KEY}`
            setProgress(25)
            const data = await fetch(URL)
            const obj = await data.json()
            setProgress(50)
            const {items} = obj
            setProgress(90)
            setYoutubeData(items)
            setProgress(100)
        }
        catch(err){
            alert(err)
            setProgress(100)
        }
    }
    //! Getting data from search bar
    const getData = (value) =>{
        videoInfo(value)
    }
    let channelId = youtubeData.map((item)=>{
        return item.snippet.channelId
    })
  return (
    <div>
        {loader ? <LoadingBar color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/> : null}
        <div className="container mt-3">
            <SearchBar getData={getData}/>
        </div>
        {channelId != 0 ? 
        <div className="container-fluid flex-wrap d-flex justify-content-center gap-3">
            {channelId.map((item,index)=>{
                return(
                    <div key={index}>
                        <NewCard videoId={item}/>
                    </div>
                )
            })}
        </div>
        : <Empty/>}
    </div>
  )
}

export default Homepage