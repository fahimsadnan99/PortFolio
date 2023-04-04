import React from 'react'
import Resume from "../../../../assets/Resume.pdf"

const HeroLeftSide = () => {
  return (
    <div className='w-full font-Sofia   dark:text-white text-start flex items-center justify-center lg:h-screen  xs:h-2/3 xs:pt-72 lg:pt-0 '>
        <div>
        <p className='sm:text-5xl md:text-6xl font-mukta py-2 xs:text-4xl'>I am Fahim Sadnan</p>
        <p className='sm:text-2xl md:text-3xl py-2 font-Satisfy xs:text-2xl'>Full Stack Web Developer</p>
        <a href="https://docs.google.com/document/d/1T5HHauR7XIVQ0-l49zuTjsA-ugkDEb0I/edit?usp=share_link&ouid=110250861038825363968&rtpof=true&sd=true" download="Fahim.Resume" > 
        <button className='text-md border-1 ring-1 p-2 rounded-sm mt-3 shadow-md shadow-lime-50/30 font-bold'>Download Cv</button></a>
        </div>

    </div>
  )
}

export default HeroLeftSide