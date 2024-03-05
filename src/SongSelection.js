import React from "react"; 
import song1 from "../src/utils/assets/audio/song1.mp3"; 
import song2 from "../src/utils/assets/audio/song2.mp3"

export function SongSelection() { 
 
  const firstSong = new Audio(song1)
 
  const secondSong = new Audio(song2) 
 
  function toggle1() { 
    if (firstSong.paused) { 
      firstSong.play()
    } else { 
      firstSong.pause() 
    } 
  }
 
  function toggle2() { 
    if (secondSong.paused) { 
      secondSong.play()
    } else { 
      secondSong.pause() 
    } 
  } 
 
  return ( 
    <div> 
      <button onClick={toggle1} className="m-4">Perfect</button> 
      <button onClick={toggle2}>Feeling Good</button> 
    </div> 
  ) 
} 
 