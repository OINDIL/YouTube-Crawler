import React, { useEffect, useState } from "react";

function NewCard({ videoId }) {
  const [date, setDate] = useState({
    day: 0,
    month: "",
    year: 0,
  });
  const [items, setItems] = useState([
    {
      title: "Undefined",
      description: "Undefined",
      customUrl: "Undefined",
      publishedAt: "Undefined",
      url:'https://placehold.co/600x400',
      viewCount: 0,
      subscriberCount: 0,
      videoCount: 0,
      country: "Undefined",
    },
  ]);
  const channelInfo = async (id) => {
    try {
      const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&maxResults=3&id=${id}&type=channel&key=${
        import.meta.env.VITE_API_KEY
      }`;
      const data = await fetch(URL);
      const obj = await data.json();
      const {
        title,
        description,
        customUrl,
        publishedAt,
        thumbnails:{medium:{url}},
        country,
      } = obj.items[0].snippet;
      const { subscriberCount, videoCount, viewCount } =
        obj.items[0].statistics;
      setItems([
        {
          title,
          description,
          customUrl,
          publishedAt,
          url,
          subscriberCount,
          videoCount,
          viewCount,
          country,
        },
      ]);
      const date = new Date(publishedAt);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
      let day = ("0" + date.getDate()).slice(-2);
      // let hours = ("0" + date.getHours()).slice(-2);
      // let minutes = ("0" + date.getMinutes()).slice(-2);
      setDate({
        day,
        month,
        year,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const formatNumber = (number) => {
    if (isNaN(number)) {
      return "Invalid number";
    }

    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + "K";
    } else {
      return number.toString();
    }
  };
  useEffect(() => {
    channelInfo(videoId);
  }, [videoId]);
  return (
    <div>
      <div className="card shadow" style={{ width: "18rem" }}>
        <img
          src={items[0].url}
          className="img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {items[0].customUrl ? (
              <a
                className="link-opacity-75-hover"
                href={`https://www.youtube.com/${items[0].customUrl}`}
                target="_blank"
              >
                {items[0].title}
              </a>
            ) : (
              items[0].title
            )}
          </h5>
          <h6 className="card-subtitle text-body-secondary">
            {items[0].customUrl} | {items[0].country}
          </h6>
          <p className="card-text">{`${items[0].description.slice(
            0,
            200
          )}...`}</p>
        </div>
        <ul className="list-group list-group-flush fw-bold">
          <li className="list-group-item">
            {formatNumber(items[0].subscriberCount)} Subscribers
          </li>
          <li className="list-group-item">
            Creation Date: {date.day}-{date.month}-{date.year}
          </li>
          <li className="list-group-item">
            {formatNumber(items[0].videoCount)} Videos
          </li>
          <li className="list-group-item">
            {formatNumber(items[0].viewCount)} Views
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewCard;
