import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
const Homepage = ()=>{
  const courses = [
    {
      image:  "/images/masoo.png",
      name: "React Course",
      price: "3,000"
    },
    {
      image:  "/images/masoo1.png",
      name: "Nodejs Course",
      price: "5,000"
    },
    {
      image:  "/images/masoo3.png",
      name: "Nextjs Course",
      price: "9,000"
    },
    {
      image:  "/images/masoo4.png",
      name: "Angular Course",
      price: "8,000"
    },
    {
      image:  "/images/5.png",
      name: "MongoDB Course",
      price: "7,000"
    },
    {
      image:  "/images/6.png",
      name: "Python Course",
      price: "10,000"
    },
    {
      image:  "/images/7.jpeg",
      name: "Artificial Intelligence Course",
      price: "11,000"
    },
    {
      image:  "/images/8.png",
      name: "Java Course",
      price: "6,000"
    },

  ]
    return(
        <>
        <div className='w-full h-[500px] bg-gradient-to-r from-blue-600 to-violet-600'>
            <div className='bg-red-600 h-[500px] animate__animated animate__fadeIn '>
                 <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide >
          <div className='h-full bg-gray-200 '>
            <div className='w-10/12 mx-auto h-full grid grid-cols-2 gap-8 '>
            <div  className='flex flex-col justify-center h-full'>
              <h1 className='text-7xl font-bold'> <span className='text-blue-600'>React</span> Course for <span className='text-blue-600'>beginners!</span> </h1>
              <p className='text-3xl font-semi-bold mt-3 text-violet-700'>Learn to Design a website</p>
              <p className='mt-3 mb-2 text-black/80'> Act as my professional React.js teacher and teach me React from beginner to advanced level.
               Explain every topic in simple English with practical, real-world examples.
                 Teach me one topic at a time with complete code and step-by-step explanations.
                 After every lesson, give me a small coding task and a quiz to test my knowledge.
                     Track my progress move to the next topic only when I say "Done".</p>
              <div className='flex gap-5'>
                <button className='mt-3 bg-gray-900 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>Enroll Now</button>
                <button className='flex gap-2 mt-3 bg-violet-600 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>
                  <ArrowRight w-4 h-4/>
                  Learn More</button>
              </div>
            </div>
            <div>
              <img src="/images/masoo2.png" alt="pic" className='w-full h-full object-cover rounded-full mt-6'/>
            </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-full bg-gray-200'>
            <div className='w-10/12 mx-auto h-full grid grid-cols-2 gap-8'>
            <div  className='flex flex-col justify-center h-full'>
              <h1 className='text-7xl font-bold'> <span className='text-blue-600'>Nodejs</span> Course for <span className='text-blue-600'>beginners!</span> </h1>
              <p className='text-3xl font-semi-bold mt-3 text-violet-700'>Learn to Design a website</p>
              <p className='mt-3 mb-2 text-black/80'> Act as my professional React.js teacher and teach me React from beginner to advanced level.
               Explain every topic in simple English with practical, real-world examples.
                 Teach me one topic at a time with complete code and step-by-step explanations.
                 After every lesson, give me a small coding task and a quiz to test my knowledge.
                     Track my progress move to the next topic only when I say "Done".</p>
              <div className='flex gap-5'>
                <button className='mt-3 bg-gray-900 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>Enroll Now</button>
                <button className='flex gap-2 mt-3 bg-violet-600 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>
                  <ArrowRight w-4 h-4/>
                  Learn More</button>
              </div>
            </div>
            <div>
              <img src="/images/masoo1.png" alt="pic" className='w-full h-full object-cover rounded-full mt-6'/>
            </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-full bg-gray-200'>
            <div className='w-10/12 mx-auto h-full grid grid-cols-2 gap-8'>
            <div  className='flex flex-col justify-center h-full'>
              <h1 className='text-7xl font-bold'> <span className='text-blue-600'>Nextjs</span> Course for <span className='text-blue-600'>beginners!</span> </h1>
              <p className='text-3xl font-semi-bold mt-3 text-violet-700'>Learn to Design a website</p>
              <p className='mt-3 mb-2 text-black/80'> Act as my professional React.js teacher and teach me React from beginner to advanced level.
               Explain every topic in simple English with practical, real-world examples.
                 Teach me one topic at a time with complete code and step-by-step explanations.
                 After every lesson, give me a small coding task and a quiz to test my knowledge.
                     Track my progress move to the next topic only when I say "Done".</p>
              <div className='flex gap-5'>
                <button className='mt-3 bg-gray-900 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>Enroll Now</button>
                <button className='flex gap-2 mt-3 bg-violet-600 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>
                  <ArrowRight w-4 h-4/>
                  Learn More</button>
              </div>
            </div>
            <div>
              <img src="/images/masoo3.png" alt="pic" className='w-full h-full object-cover rounded-full mt-6'/>
            </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
            </div>
        </div>
            <div className='p-24 bg-gray-200'>
              <div className='text-center w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-blue-600'>Learn New Courses</h1>
                <p className='text-xl mt-3 text-black/70'>Learn React from scratch with our comprehensive course designed for beginners. 
                  Our expert instructors will guide you through the fundamentals of React, 
                  helping you build dynamic and interactive web applications. 
                  Gain hands-on experience with real-world projects and enhance your skills in front-end development.</p>
              </div>
              <div className='grid grid-cols-4 gap-10 mt-12'>
                {
                courses.map((item,index)=>(
                    <div key={index} className='bg-white p-5 rounded-lg shadow-md hover:scale-105 transition duration-300'>
                      <img src={item.image} alt="pic" className='w-full h-[200px] object-cover rounded-lg'/>
                      <div className='mt-3'>
                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                        <p className='text-black/70 mt-2'>{item.price.toLocaleString()}</p>
                        <button className='mt-3 bg-indigo-600 text-white font-bold px-8 py-2.5 rounded-lg hover:scale-110 transition duration-300 active:scale-80'>Enroll Now</button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='p-20 bg-white'>
                
                 <div className='text-center w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-blue-600'>FAQ</h1>
                <p className='text-xl mt-3 text-black/70'>Learn React from scratch with our comprehensive course designed for beginners. 
                  Our expert instructors will guide you through the fundamentals of React, 
                  helping you build dynamic and interactive web applications. 
                  Gain hands-on experience with real-world projects and enhance your skills in front-end development.</p>
              </div>
             < div className='grid grid-cols-2 gap-10 mt-12 w-10/12 mx-auto'>
                <div className='bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition duration-300'>
                  <h1 className='text-2xl font-bold'>What is React?</h1>
                  <p className='text-black/70 mt-2'>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM.</p>
                </div>
                <div className='bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition duration-300'>
                  <h1 className='text-2xl font-bold'>Why use React?</h1>
                  <p className='text-black/70 mt-2'>React provides a virtual DOM that optimizes rendering performance, making it fast and efficient. It also promotes component-based architecture, enhancing code reusability and maintainability.</p>
                </div>
                <div className='bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition duration-300'>
                  <h1 className='text-2xl font-bold'>How does React work?</h1>
                  <p className='text-black/70 mt-2'>React uses a declarative approach to define UI components. It maintains a virtual representation of the DOM and updates it efficiently when the underlying data changes, resulting in a smooth user experience.</p>
                </div>
                <div className='bg-gray-200 p-5 rounded-lg shadow-md hover:scale-105 transition duration-300'>
                  <h1 className='text-2xl font-bold'>What are React components?</h1>
                  <p className='text-black/70 mt-2'>React components are reusable building blocks that encapsulate UI logic and rendering. They can be functional or class-based and can accept props to customize their behavior.</p>
                </div>
             </div>
              
            </div>
        </>
    )
}

export default Homepage;