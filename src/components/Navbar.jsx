const Navbar = ()=>{
    return(
        <>
       <nav className="bg-white-600 px-24 py-2 flex lg:flex-row flex-col justify-between items-center shadow-xl">
        <div className = "w-20 h-20 rounded-full flex-justify-center items-center">
            <img src="./public/images/my.jpeg" alt="" className="w-16" />
        </div>

        <div className = "flex lg:flex-row flex-col lg:gap-10 gap-2">
            <h1 className="bg-rose-600 px-6 py-2 rounded text-white border border-2 hover:bg-yellow-500">Home</h1>
            <h1 className="bg-blue-600 px-6 py-2 rounded text-white border border-2 hover:bg-yellow-500">Serrvice</h1>
            <h1 className="bg-green-600 px-6 py-2 rounded text-white border border-2 hover:bg-yellow-500">Contact</h1>
            <h1 className="bg-red-600 px-6 py-2 rounded text-white border border-2 hover:bg-yellow-500">testimonals</h1>
            <h1 className="bg-teal-600 px-6 py-2 rounded text-white border border-2 hover:bg-yellow-500">work</h1>
        </div>
       </nav>
        
        </>
    )
}

export default Navbar;