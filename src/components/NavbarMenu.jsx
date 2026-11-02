import { useState } from "react";

const NavbarMenu = ()=>{
    const [open, setOpen]=useState(true)
    const Menus= [
       {
        label :"Homepage",
        link: '#'
       },
       {
        label :"Dashboard",
        link: '#'
       },
       {
        label :"Applications",
        link: '#'
       },
       {
        label :"Settings",
        link: '#'
       },
       {
        label :"Log Out",
        link: '#'
       },
    ]
    return(
        <>
        <div>
            <div  style={{
                left: open ? 0: -280,
                transition: '300ms'
            }}
            
            className="fixed top-0 w-[280px] shadow-2xl h-full p-8 border-r border-r-gray-100">
          <img src="./public/images/my.jpeg" alt="" className="w-20 h-20 rounded-full shadow-lg" />
          <div className="mt-3">
            <h1 className="text-lg font-medium">Masood Ahmed </h1>
            <p className="text-black/60">masoo@gmail.com</p>
          </div>
          <div className="mt-8 -mx-3 space-y-3">
            {
                Menus.map((item,index)=>(
                    <a className="flex items-center gap-8 text-black/80 hover:bg-gray-100 py-3 rounded-lg hover:text-black hover:pl-3 transition duration-300" href={item.link}>{item.label}</a>

                ))
            }
          </div>
         </div>
         
         <div>
            <nav className="bg-violet-600 p-4 flex items-center justify-between px-6">
              <h1 className="text-lg font-medium text-white">Branding</h1>
              <button className="text-white font-bold bg-violet-500 p-1 px-2 rounded-lg hover:bg-rose-500" onClick={()=>setOpen(!open)}>
                  menu
              </button>
            </nav>
         </div>
        </div>
        </>
    )
}

export default NavbarMenu;