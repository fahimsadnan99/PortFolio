import React from 'react'
import git from "../../../assets/git.webp"
import GithHub from "../../../assets/GitHub.webp"
import FireBase from "../../../assets/firebase.webp"
import Linux from "../../../assets/Linux.webp" 

let image = [git,GithHub,FireBase,Linux]
const Others = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:pb-10 sm:pb-5 xs:pb-5'>
        <p className='text-3xl font-semibold font-Sofia border-b-2 w-44 pb-3 xs:ml-10 lg:ml-0'>Others</p>
        <div className=' lg:gap-5 xs:gap-4    grid lg:grid-cols-6 xs:grid-cols-4 lg:py-8 xs:py-8  '>
            {image?.map((img)=>{
                return (<div className=' flex items-center justify-center text-center'><img src={img} alt={img} className='mx-auto md:w-16 sm:w-12 xs:w-10' /></div>)
            })}
        </div>

    </div>
  )
}

export default Others