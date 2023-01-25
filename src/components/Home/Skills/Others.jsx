import React from 'react'
import git from "../../../assets/git.webp"
import GithHub from "../../../assets/GitHub.webp"
import FireBase from "../../../assets/firebase.webp"
import Linux from "../../../assets/Linux.webp" 

let image = [git,GithHub,FireBase,Linux]
const Others = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:pb-10 sm:pb-5 xs:pb-5'>
        <p className='sm:text-2xl xs:text-xl md:text-3xl font-semibold font-Sofia border-b-2 xs:w-24 md:w-32 lg:w-44 md:pb-3 xs:pb-1 xs:ml-10 lg:ml-0'>Others</p>
        <div className=' lg:gap-5 xs:gap-2    grid lg:grid-cols-6 xs:grid-cols-4 lg:py-8 xs:py-8  '>
            {image?.map((img)=>{
                return (<div className=' flex items-center justify-center text-center'><img src={img} alt={img} className='mx-auto md:w-20 sm:w-12 xs:w-10 bg-yellow-50 shadow-lg rounded-sm sm:p-3 xs:p-1' /></div>)
            })}
        </div>

    </div>
  )
}

export default Others