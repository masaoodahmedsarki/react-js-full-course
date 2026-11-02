import "animate.css"
import { useState } from "react";

const Menu = ()=>{
    const [showDropdown, setShowDropdown]=useState(false)
    return(
        <>
        <div className="bg-gray-200 min-h-screen p-6">
            <div className="bg-white w-fit p-8 mx-auto rounded-xl shadow-lg" >
                <h1 className="text-4xl font-bold">Drop Down Menu</h1>
                <button onClick={()=>setShowDropdown(!showDropdown)} className="relative items-center bg-blue-700 text-white px-3 py-2 rounded mt-5">Tutorial 
                    {
                        showDropdown &&
                    <div className=" animate__animated animate__fadeIn bg-white absolute top-12 left-0 w-full p-2 shadow-lg rounded">
                        <a href="#" className="text-black hover:bg-gray-200 w-full p-2 block rounded">Home Page</a>
                        <a href="#" className="text-black hover:bg-gray-200 w-full p-2 block rounded">Videos</a>
                        <a href="#" className="text-black hover:bg-gray-200 w-full p-2 block rounded">Images</a>
                        <a href="#" className="text-black hover:bg-gray-200 w-full p-2 block rounded">About  Us</a>
                    </div>
                    }
                </button>
            </div>
        </div>
        </>
    )
}

export default Menu;