import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import About from '../../components/Home/About/About'
import Skills from '../../components/Home/Skills/Skills'
import Portfolio from '../../components/Home/Protfolio/Portfolio'

const Home = () => {
  return (
    <div className=''>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </div>
  )
}

export default Home