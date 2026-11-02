import { useState } from "react";

const Form = ()=>{
    const [form,setForm] = useState({
        Fullname:"",
        email:"",
        password:""
    })

    const handleChange =(e) =>{
    const input = e.target
    const name = input.name
    const value = input.value
    setForm({
        ...form,
        [name] :value
    })
    }
    const Signup = (e)=>{
       e.preventDefault()
       console.log(form)
    }
  return(
    <>
    <div className="bg-blue-500 min-h-screen flex items-center justify-center ">
        <div className="bg-white p-12 w-[30%] mx-auto rounded-lg">
            <h1 className="font-medium text-3xl ">Register Form</h1>
            <p className="text-gray-800">Start your jurney today by creating an account</p>

                                 {/* ****************form**************** */}
             <form className="mt-5 flex flex-col gap-5" onSubmit={Signup}>

                <div className="flex flex-col gap-1">
                    <label className="font-medium text-base">FullName</label>
                    <input required className="border border-gray-300 rounded-lg p-3" placeholder="your name goes here" name="Fullname" value={form.Fullname} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium text-base">Email</label>
                    <input required className="border border-gray-300 rounded-lg p-3" placeholder="your name goes here" name="email" type="email" value={form.email} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium text-base">Password</label>
                    <input required className="border border-gray-300 rounded-lg p-3" placeholder="your name goes here" name="password" type="password" value={form.password} onChange={handleChange}/>
                </div>
                <button className="p-3 rounded-lg font-medium text-white bg-red-600">Sign up </button>
             </form>
        </div>
    </div>
    </>
  )
}

export default Form;
