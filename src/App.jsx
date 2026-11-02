import "animate.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Sections from "./components/Sections.jsx"
import AnimationProps from "./components/AnimationProps.jsx"
import Hooks from "./components/Hooks.jsx"
import UseState from "./components/UseState.jsx"
import Menu from "./components/Menu.jsx"
import NavbarMenu from "./components/NavbarMenu.jsx"
import Projects from "./components/Projects.jsx"
import Form from "./components/Form.jsx"

// ******************Routing******************
import Homepage from "./pages/Homepage.jsx"
import Courses from "./pages/Courses.jsx"
import Tutorials from "./pages/Tutorials.jsx"
import Contact from "./pages/Contact.jsx"
import Layout from "./components/Layout"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
const App = ()=> {

  return (
    <>
    <div>
  {/* <Navbar/>
  <Sections/>
  <Footer/> */}
   {/* <AnimationProps/> */}
   {/* <Hooks/> */}
   {/* <UseState/> */}
   {/* <Menu/> */}
   {/* <NavbarMenu/> */}
   {/* <Projects/> */}
   {/* <Form/> */}

   <BrowserRouter>
   <Routes>
       <Route element={<Layout/>}>
    <Route path="/" element={<Homepage/>} />
    <Route path="/tutorials" element={<Tutorials/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/courses" element={<Courses/>} />
      </Route>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
   </BrowserRouter>
    </div> 
    </>
  )
}

export default App;
      