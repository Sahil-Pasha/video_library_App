import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, toggleBookmark, openPlayer }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          toggleBookmark={toggleBookmark}
          openPlayer={openPlayer}
        />
      ))}
    </div>
  )
}

export default VideoList
