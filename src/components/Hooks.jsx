import { useRef } from "react";
const Hooks = ()=>{
    const videoRef = useRef()
    const playPause=()=>{
        const video = videoRef.current
       const isPaused = video.paused
       if(isPaused){
        video.play()
       }else{
        video.pause()
       }

    }
    return(
       <>
       <div>
       <video ref={videoRef} src="./public/videos/video.mp4" controls width={720}/>
       </div>

       <div className="mt-5 flex mx-auto">
        <button onClick={playPause} className=" rounded-full bg-blue-500 text-white px-3 py-4 font-bold hover:scale-105 hover:bg-gray-400 hover:text-black" >Play & pause</button>
     
       </div>
       </> 
    )
}

export default Hooks;