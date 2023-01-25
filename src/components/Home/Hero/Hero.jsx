import React from 'react'
import HeroLeftSide from './LeftSide/HeroLeftSide'
import HeroRightSide from './RightSide/HeroRightSide'
import "./style.css"

const Hero = () => {
  return (
    <div className='lg:px-10 px-0  grid lg:grid-cols-2 dark:bg-neutral-900 w-full  lg:h-screen' id="Home">

        <HeroLeftSide></HeroLeftSide>
        <HeroRightSide></HeroRightSide>
    </div>
  )
}

export default Hero