import video from "./assets/video.mp4";
import "./video.css"

function Video() {
  
  return (
    <>
      <video className="video" src={video} muted autoPlay loop/>
      <span></span>
    </>
      
  )
}

export default Video
