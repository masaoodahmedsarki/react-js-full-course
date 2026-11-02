import { ArrowRight, Bird } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Layout = ()=>{
    const menus = [
        {
            label:"Home",
            link: "/"
        },
        {
            label:"Courses",
            link: "/courses"
        },
        {
            label:"Tutorials",
            link: "/tutorials"
        },
        {
            label:"Contact Us",
            link: "/contact"
        },
    ]
    return(
        <>
        <div>
            <nav className="p-8 border border-r shadow-xl bg-white items-center flex justify-around sticky top-0 left-0 z-20">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-11 h-11 rounded-full flex items-center justify-center">
                        <Bird/>
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-blue-600">Birdling</h1>
                    <p className="text-sky-500 font-medium text-xs">Making learn easier</p>
                </div>
                </div>
                <div className="flex items-center gap-12">
                {
                    menus.map((item,index)=>(
                     <Link className="text-black/60 font-medium hover:text-black"  to={item.link}>{item.label}</Link>
                    ))
                }
                 </div> 
                 <div className="flex items-center gap-8">
                    <Link className="text-black/60 font-medium hover:text-black" to="/login">Login</Link>
                    <Link className=" flex items-center gap-3 font-medium text-white font-medium  bg-blue-600 px-8 py-2.5 
                    rounded-lg hover:scale-105 transition duration-300 active:scale-80" to="/signup">
                        <ArrowRight className="w-4 h-4"/>
                    Signup</Link>
                 </div>
            </nav>

            <section className="">
            <Outlet/>
            </section>
            <footer className="h-[500px] bg-blue-500 rounded-t-[100px] p-24">
               <div className="grid grid-cols-4 gap-8">

                <div>
                    <h1 className="text-xl font-bold text-white">Birdling</h1>
                    <p className="text-white/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rerum laudantium quidem, quibusdam, amet, suscipit nihil sapiente animi quos ab dignissimos aliquam ad fugit beatae eos tempore voluptatibus perspiciatis!</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white">Tutorials</h1>
                    <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rerum laudantium quidem, quibusdam, amet, suscipit nihil sapiente animi quos ab dignissimos aliquam ad fugit beatae eos tempore voluptatibus perspiciatis!</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white">Courses</h1>
                    <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rerum laudantium quidem, quibusdam, amet, suscipit nihil sapiente animi quos ab dignissimos aliquam ad fugit beatae eos tempore voluptatibus perspiciatis!</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white">Contact us</h1>
                    <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam rerum laudantium quidem, quibusdam, amet, suscipit nihil sapiente animi quos ab dignissimos aliquam ad fugit beatae eos tempore voluptatibus perspiciatis!</p>
                </div>

               </div>
            </footer>
        </div>
        </>
    )
}

export default Layout;