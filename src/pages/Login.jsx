import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Login = ()=>{
    return(

        <>
        <div className="grid grid-cols-2">
            <div className=" h-screen bg-blue-600 flex flex-col items-center justify-center">
             <div className="w-32 h-32 bg-rose-600 flex items-center justify-center rounded-full animate__animated animate__slideInDown">
              <User className="w-16 h-16 text-white"/>
             </div>
             <h1 className="text-8xl text-white font-bold animate__animated animate__fadeIn">Login</h1>
             <p className="text-white/80 p-12 text-center  animate__animated animate__fadeIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat culpa aut ullam alias impedit quia a, obcaecati vel quod quo natus dolorem ex rerum amet libero, magnam eius recusandae!</p>
            </div>
             <div className="flex items-center justify-center flex-col">
                <form className="w-lg flex flex-col gap-5">

                  <input
                   name="username"
                   placeholder="Username" 
                   className="border-b border-b-gray-300 p-3 focus:outline-none focus:border-b-blue-600 
                   focus:border-b-2 focus:placeholder-blue-600 focus:font-medium"
                   required
                   />
                  <input
                   name="password"
                   placeholder="Password"
                   type="password" 
                   className="border-b border-b-gray-300 p-3 focus:outline-none focus:border-b-blue-600 
                   focus:border-b-2 focus:placeholder-blue-600 focus:font-medium"
                   required
                   />

                   <button className="mt-4 bg-blue-600 text-white p-3 font-medium rounded-lg">Sign up</button>
                </form>
                     <div className="mt-3 text-black/60">
                      Don`t have an account ? <Link to="/signup" className="text-blue-400 font-medium hover:underline hover:text-blue-600">Sign in</Link>
                     </div>
             </div>
        </div>
        </>
    )
}

export default Login;