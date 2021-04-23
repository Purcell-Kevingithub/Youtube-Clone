import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment centered grid mobile tablet only">
        <div className="video-content">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
      <div className="ui segment grid computer only">
        <div className="video-content">
          <h4 className="ui huge header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
