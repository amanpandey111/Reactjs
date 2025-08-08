import { useRef } from 'react'
import monkey from '/monkey.mp4'

const Video = () => {
    const videoRef = useRef()
    const playVideo = () => {
        videoRef.current.play();
    }
    const stopVideo = () => {
        videoRef.current.pause()
    }
  return (
    <section>
        <video ref={videoRef} src={monkey} controls loop
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        ></video>
    </section>
  )
}

export default Video