import React from 'react'

const VideoItem = ({ video, toggleBookmark, openPlayer }) => {
  return (
    <div className="videoItems">
      <h3>{video.name}</h3>
      <button
        style={{ marginTop: '10px' }}
        className="button"
        onClick={() => toggleBookmark(video.id)}
      >
        {video.bookmarked ? 'Remove Bookmark' : 'Bookmark'}
      </button>
      <button
        style={{ marginTop: '10px' }}
        className="button"
        onClick={() => openPlayer(video)}
      >
        Play
      </button>
    </div>
  )
}

export default VideoItem
