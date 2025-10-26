import React, { useEffect, useRef, useState } from 'react'

const AutoPlay =()=> {
     const videoRef = useRef(null)
     const [vActive, setVactive] = useState(false)
     useEffect(() =>{
          if(videoRef.current && vActive === true){
               const vPlayer = videoRef.current
               vPlayer.src = "https://www.w3schools.com/html/mov_bbb.mp4"
               vPlayer.play()
          }
     },[vActive])
     useEffect(() =>{
          document.addEventListener("click", ()=>{
               setVactive(true)
          })
     },[])
  return (
    <div className='h-[5000px]'>
     <video ref={videoRef} controls width="720"/>
     </div>
  )
}

export default AutoPlay