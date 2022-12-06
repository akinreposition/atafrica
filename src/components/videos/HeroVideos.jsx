import React from 'react'

const HeroVideos = () => {
    const videoURL= "https://cdn.dribbble.com/userupload/3362672/file/original-313ab3dc2c02e0cfd89d728b2609dddf.m4v"
    // const videoURL = "https://dribbble.com/shots/15124806-Crypto-Investment-Wallet-Animation"
    // const videoURL = "https://www.youtube.com/watch?v=zZRUvNoFYXQ"

  return (
    <video controls width="100%" height="100%">
        <source src={videoURL} type="video/mp4" />
    </video>
  )
}

export default HeroVideos