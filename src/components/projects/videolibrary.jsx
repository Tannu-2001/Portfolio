import React from 'react'

const VideoLibrary = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">VideoLibrary</h3>
        <div className='docDiv'><img src="/videolibrary.png" alt="VideoLibrary" className='docImage' /></div>
        <div style={{margin:"5px"}}><a href="https://video-library-frontend-eta.vercel.app/" target='_blank' className='demolink'>See Demo <span className='bi bi-arrow-right'></span></a></div>
    </div>
  )
}

export default VideoLibrary