
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Particle from './Components/Particle'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

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
      <Projects />
      
     
    </>
    
  )
}

export default App