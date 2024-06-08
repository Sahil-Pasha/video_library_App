import React from 'react'

const VideoPlayer = ({ video, closePlayer }) => {
  return (
    <div className="video-player-popup">
      <button className="close-button" onClick={closePlayer}>
        Close
      </button>
      <video controls src={video.url} />
    </div>
  )
}

export default VideoPlayer
