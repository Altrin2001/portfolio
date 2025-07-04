
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Particle from './Components/Particle'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'

function App() {

  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[]);

  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
    
  )
}

export default App