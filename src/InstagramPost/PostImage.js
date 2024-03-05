import React from "react";
import { CardImg} from "react-bootstrap";
import post1 from '../utils/assets/images/post1.jpeg';
import song1 from "../utils/assets/audio/song1.mp3"

export function PostImage(){
    const firstSong = new Audio(song1)

    function toggle1() { 
        if (firstSong.paused) { 
          firstSong.play()
        } else { 
          firstSong.pause() 
        } 
    }

    return (
        <CardImg src={post1} alt="Post 1" className="mt-3"  onClick={toggle1}/>
    )
}