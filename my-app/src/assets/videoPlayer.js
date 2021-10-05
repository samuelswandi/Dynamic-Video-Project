import React from "react";
import "./videoPlayer.css";
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';

const VideoPlayer = () => {

    return (
        <div>
            <video id="vidPlayer" src="Video.mp4" controls>
            </video>
            <Helmet>
                <ScriptTag>
                let v = document.getElementById("vidPlayer")
                v.addEventListener('play',function(event){
                    console.log('video is playing!')
                })

                v.addEventListener('pause',function(event){
                    console.log('video is paused!')
                })
                </ScriptTag>
                
            </Helmet>
        </div>
    )
}

export default VideoPlayer
