import { useState } from "react"

const UseState = ()=>{
    const [show, setShow] = useState(true)
    return(
        <>
        <div className=" font-bold mt-5">
            {
              show &&  
       <img src="./public/images/my.jpeg" width={300} height={300}/>
            }
        <button className="bg-blue-600 text-white py-3 px-2 rounded" onClick={()=>setShow(!show)}>Toggle</button>
        </div>
        </>
    )
}

export default UseState;