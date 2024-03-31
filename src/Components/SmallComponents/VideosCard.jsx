import React, { useEffect, useState } from 'react'

const VideosCard = ({ data }) => {
  const [video, setVideo] = useState([
    {
      title:'Undefined',
      description:'Undefined',
      url:'',
      day:0,
      month:0,
      year:0,
      channelTitle:'Undefined',
      tags:[],
      defaultAudioLanguage:'No Data'
    }
  ])
  const channelInfo = async (id) => {
    try {
      const URL = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${import.meta.env.VITE_API_KEY}`
      const data = await fetch(URL, {
        method: 'GET',
        mode: 'cors',
      })
      return data.json()
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    channelInfo(data).then((data) => {
      const {title,description,publishedAt,thumbnails:{high:{url}},channelTitle,tags = ["No Tags Used..."],defaultAudioLanguage} = data.items[0].snippet
      const date = new Date(publishedAt)
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
      let day = ("0" + date.getDate()).slice(-2);
      setVideo([
        {
          title,
          description,
          url,
          day,
          month,
          year,
          channelTitle,
          tags,
          defaultAudioLanguage
        }
      ]);
    })
  }, [data])
  return (
    <div>
      <div className="card" style={{width:'18rem'}}>
        <img src={video[0].url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${(video[0].title).slice(0,100)}...`}</h5>
          <h6 className="card-subtitle text-body-secondary">{video[0].channelTitle}</h6>
          <p className="card-text">{`${(video[0].description).slice(0,200)}...`}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><span className='fw-bold'>Tags Used:</span>: {video[0].tags.map((tag)=>{
            return ` #${tag}`
          })}
          </li>
          <li className="list-group-item fw-bold">Upload Date: {video[0].day}-{video[0].month}-{video[0].year}</li>
          <li className="list-group-item fw-bold">Audio Language: {video[0].defaultAudioLanguage}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

export default VideosCard