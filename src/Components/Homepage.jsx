import React, { useState, useEffect } from 'react'
import SearchBar from './SmallComponents/SearchBar'
import Card from './SmallComponents/Card'
import Empty from './SmallComponents/Empty'
import LoadingBar from 'react-top-loading-bar'

function Homepage() {
    // states
    const [youtubeData,setYoutubeData] = useState([])
    const [loader, setLoader] = useState(false)
    const [progress, setProgress] = useState(0)

    const youtubeApi = async (query) =>{
        setLoader(true)
        try{
            const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=AIzaSyAbtu-vPTd_dCckkdsSimbzq2MC41B0dxw`
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
        }
    }
    //! Getting data from search bar
    const getData = (value) =>{
        youtubeApi(value)
    }

    // useEffect(()=>{
    //     youtubeApi('')
    // },[])
    console.log(youtubeData);
  return (
    <div>
        {loader ? <LoadingBar color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/> : null}
        <div className="container mt-3">
            <SearchBar getData={getData}/>
        </div>
        {youtubeData.length !== 0 ? <div className="container-fluid d-flex justify-content-center flex-wrap gap-3">
            {youtubeData.map((item)=>{
                return(
                    <div key={item.id.videoId}>
                        <Card title={item.snippet.title}
                        channelTitle={item.snippet.channelTitle}
                        description={item.snippet.description}
                        thumbnail={item.snippet.thumbnails.high.url}
                        link={item.id.videoId}
                        publishedAt={item.snippet.publishedAt}
                        />
                    </div>
                )
            })}
        </div> : <Empty/>}
        
    </div>
  )
}

export default Homepage