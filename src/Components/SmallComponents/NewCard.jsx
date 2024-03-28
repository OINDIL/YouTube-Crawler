import React,{useState} from 'react'

function NewCard({videoId}) {
  const channelInfo = async (id) =>{
    try{
      const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&maxResults=3&id=${id}&type=channel&key=AIzaSyBJQP4LAiQBUA5q_Y_plVQg6hn2dIQFdFg`
      const data = await fetch(URL)
      const obj = await data.json()
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div>
        <h6>{videoId}</h6>
    </div>
  )
}

export default NewCard