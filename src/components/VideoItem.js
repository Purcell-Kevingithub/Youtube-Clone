import './VideoItem.css';
import React from 'react';

// the video prop is props.video destructured
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image"src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="huge header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;