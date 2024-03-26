  import React from 'react'

  function Card({ title, description, thumbnail, link, channelTitle }) {

    return (
      <div>
        <div className="card" id='' style={{ width: '18rem', height: '25rem' }}>
          <img src={`${thumbnail}`} className="card-img-top" alt="" />
          <div className="card-body position-relative">
            <h5 className="card-title">{`${title.slice(0, 20)}...`}</h5>
            <h6 className='card-subtitle text-body-secondary'>{channelTitle}</h6>
            <p className="card-text">{`${description.slice(0, 70)}...`}</p>
            <a href={`https://www.youtube.com/watch?v=${link}`} target='_blank'>Watch Video</a>
          </div>
        </div>
      </div>
    )
  }

  export default Card