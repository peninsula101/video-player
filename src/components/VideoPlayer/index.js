import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">My Favourite Picks</h1>
    <div className="responsive-container">
      <div className="videos-container">
        <ReactPlayer
          width="500px"
          height="300px"
          className="video"
          url="https://youtu.be/7gaEEtc1iA8"
        />
        <ReactPlayer
          width="500px"
          height="300px"
          className="video"
          url="https://youtu.be/5oH9Nr3bKfw"
        />
      </div>
      <div className="videos-container">
        <ReactPlayer
          width="500px"
          height="300px"
          className="video"
          url="https://youtu.be/ebfV2J4lso4"
          controls="true"
        />
        <ReactPlayer
          width="500px"
          height="300px"
          className="video"
          url="https://youtu.be/vU9mRapdEgw"
        />
      </div>
    </div>
  </div>
)

export default VideoPlayer
