import './App.css'
import React, { useState } from 'react'
import VideoUpload from './components/VideoUpload'
import VideoPlayer from './VideoPlayer'
import VideoList from './components/VideoList'

function App() {
  const [videos, setVideos] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [showBookmarks, setShowBookmarks] = useState(false)

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: Date.now(), bookmarked: false }])
  }

  const toggleBookmark = (id) => {
    setVideos(
      videos.map((video) =>
        video.id === id ? { ...video, bookmarked: !video.bookmarked } : video,
      ),
    )
  }

  const openPlayer = (video) => {
    setCurrentVideo(video)
    setIsPlayerOpen(true)
  }

  const closePlayer = () => {
    setCurrentVideo(null)
    setIsPlayerOpen(false)
  }

  const filteredVideos = showBookmarks
    ? videos.filter((video) => video.bookmarked)
    : videos

  return (
    <div className="app">
      <h1>Video Library</h1>
      <VideoUpload addVideo={addVideo} />
      <div>
        <button
          className="Showbookmarkbutton"
          onClick={() => setShowBookmarks(!showBookmarks)}
        >
          {showBookmarks ? 'Show All Videos' : 'Show Bookmarked Videos'}
        </button>
      </div>
      <VideoList
        videos={filteredVideos}
        toggleBookmark={toggleBookmark}
        openPlayer={openPlayer}
      />
      {isPlayerOpen && (
        <VideoPlayer video={currentVideo} closePlayer={closePlayer} />
      )}
    </div>
  )
}

export default App
