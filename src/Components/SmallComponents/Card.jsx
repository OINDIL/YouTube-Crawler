import React from 'react'

function Card({ title, description, thumbnail, link, channelTitle, publishedAt }) {
  let date = new Date(publishedAt)
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
  var day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  return (
    <div>
      <div className="card" style={{ width: '18rem', height: '33rem' }}>
        <img src={`${thumbnail}`} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{`${title.slice(0, 20)}...`}</h5>
          <h6 class="card-subtitle text-body-secondary">{channelTitle}</h6>
          <p className="card-text">{`${description.slice(0, 70)}...`}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{"Date: " + day + "-" + month + "-" + year + " " + "Time: " + hours + ":" + minutes}</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href={`https://www.youtube.com/watch?v=${link}`} target='_blank'>Watch Video</a>
        </div>
      </div>
    </div>
  )
}

export default Card