const Projects = ()=>{
    return(
     <>
     <div className="bg-zinc-900 min-h-screen py-12 flex items-center justify-center">
      <div className="bg-white roundef-xl p-8 shadow-lg w-xl">
        <h1 className="text-4xl font-bold">Todo Manager</h1>
        <input className="bg-blue-200 rounded w-full mt-4" placeholder="Task List" />
        <button className="flex items-center gap-2 bg-rose-600 px-8 py-3 rounded-lg text-white font-bold mt-3">Add</button>
        <div className="mt-5 bg-gray-200 rounded-lg p-6 space-y-3">
           <div className="bg-white p-3 rounded">
            i am your video
           </div>
           <div className="bg-white p-3 rounded">
            i am your video
           </div>
           <div className="bg-white p-3 rounded">
            i am your video
           </div>
           <div className="bg-white p-3 rounded">
            i am your video
           </div>
        </div>
      </div>
     </div>
     </>
    )
}

export default Projects;