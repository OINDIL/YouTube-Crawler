import React, { useState, useEffect } from 'react'
import SearchBar from './SmallComponents/SearchBar'
import Card from './SmallComponents/Card'
import Empty from './SmallComponents/Empty'
import LoadingBar from 'react-top-loading-bar'
import NewCard from './SmallComponents/NewCard'

function Homepage() {
    // states
    const [youtubeData,setYoutubeData] = useState([])
    const [loader, setLoader] = useState(false)
    const [progress, setProgress] = useState(0)
    

    const videoInfo = async (query) =>{
        setLoader(true)
        try{
            const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${query}&type=channel&key=AIzaSyBJQP4LAiQBUA5q_Y_plVQg6hn2dIQFdFg`
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

    // useEffect(()=>{
    //     videoInfo('')
    // },[])
    let channelId = youtubeData.map((item)=>{
        return item.snippet.channelId
    })
    // console.log(channelId);
  return (
    <div>
        {loader ? <LoadingBar color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/> : null}
        <div className="container mt-3">
            <SearchBar getData={getData}/>
        </div>
        {/* {youtubeData.length !== 0 ? <div className="container-fluid d-flex justify-content-center flex-wrap gap-3">
            {youtubeData.map((item)=>{
                return(
                    <div key={item.id.videoId}>
                        <Card title={item.snippet.title}
                        channelTitle={item.snippet.channelTitle}
                        description={item.snippet.description}
                        thumbnail={item.snippet.thumbnails.high.url}
                        videoId={item.id.videoId}
                        publishedAt={item.snippet.publishedAt}
                        />
                    </div>
                )
            })}
        </div> : <Empty/>} */}
        {channelId !== 0 ? 
        <div className="container">
            {channelId.map((item,index)=>{
                return(
                    <div className="container" key={index}>
                        <NewCard videoId={item}/>
                    </div>
                )
            })}
        </div>
        : null}
    </div>
  )
}

export default Homepage