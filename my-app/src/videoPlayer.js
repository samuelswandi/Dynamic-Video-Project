import React, { useState, useEffect } from "react";
import "./videoPlayer.css"
import Iframe from 'react-iframe'


const VideoPlayer = () => {
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        counter > 0 && setTimeout(() => 
        setCounter(counter + 1), 1000);
        console.log(counter);
      }, [counter]);


    return (
        <div>
            <Iframe className="vidPlayer" src="Video.mp4" allowfullscreen >
            </Iframe>
        </div>
    )
}

export default VideoPlayer
