import React,{useEffect} from 'react'

const VideosCard = ({data}) => {
  const channelInfo = async (id) => {
    try {
      const URL = `https://www.googleapis.com/youtube/v3/vidoes?part=snippet,statistics&maxResults=3&id=${id}&type=videos&key=${import.meta.env.VITE_API_KEY}`
      const data = await fetch(URL)
      const obj = await data.json()
      const { title, description, customUrl, publishedAt, thumbnails, country } = obj.items[0].snippet
      const { statistics } = obj.items[0]
      console.log(title);
    } catch (error) {
      console.error(error)
    }
  }
  // useEffect(() => {
  //   channelInfo(data)
  // }, [data])
  return (
    <div>
      {data}
    </div>
  )
}

export default VideosCard