import React from 'react';
import VideoItem from './VideoItem';

// the videos prop is props.videos destructured
const VideoList = ({ videos, onVideoSelect }) =>{
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    })
    return (
        <div className="ui divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;