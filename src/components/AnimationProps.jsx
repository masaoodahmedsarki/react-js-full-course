import 'animate.css';

const AnimationProps = ()=>{
    return(
        <>
        <div className='bg-gray-200 min-h-screen py-12'>
            <div className='bg-white w-[60%] p-11 rounded-2xl mx-auto shadow-lg animate__animated animate-backInDown'>
             <h1 className='font-bold text-3xl'>Welcome Back!</h1>
             <p className='text-black/70 mt-2 text-jusatify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero commodi illum provident amet minima pariatur deserunt expedita optio dolores aliquam obcaecati reprehenderit, omnis aperiam officiis voluptate! Quidem esse quos minus.</p>
             <div className='mt-5 flex gap-6 flex-wrap'>
              <button className='text-white bg-blue-500 px-8  py-2.5 rounded transition duration-300'>Home</button>
             </div>
            </div>

        </div>
        </>
    )
}

export default AnimationProps;