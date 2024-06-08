import React, { useState } from 'react'
import uploadIcon from '../assets/uploadIcon.png'

const VideoUpload = ({ addVideo }) => {
  const [videoFile, setVideoFile] = useState(null)

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0])
  }

  const handleUpload = () => {
    if (videoFile) {
      const videoURL = URL.createObjectURL(videoFile)
      addVideo({ file: videoFile, url: videoURL, name: videoFile.name })
      setVideoFile(null)
    } else {
      alert('Please select a file before uploading.')
    }
  }
  const triggerFileInput = () => {
    document.getElementById('fileInput').click()
  }

  return (
    <div>
      <div className="uploadSection">
        <h3>Upload your video</h3>
        <img
          src={uploadIcon}
          alt="Upload Icon"
          onClick={triggerFileInput}
          style={{ cursor: 'pointer' }}
        />
        <p>
          Drag and drop the Video file or you can{' '}
          <span
            onClick={triggerFileInput}
            style={{
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Choose file
          </span>
        </p>
        <input
          type="file"
          id="fileInput"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {videoFile && (
          <p style={{ color: 'gray' }}>Selected file: {videoFile.name}</p>
        )}
        <button className="button" onClick={handleUpload}>
          Upload Video
        </button>
      </div>
    </div>
  )
}

export default VideoUpload
