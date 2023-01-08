import { useState } from 'react'
import reactLogo from './assets/react.svg'
function Video() {

  return (
    <video autoPlay muted loop>
      <source src='./assets/videos/video.mp4' type='video/mp4'/>
    </video>
  )
}

export default Video
