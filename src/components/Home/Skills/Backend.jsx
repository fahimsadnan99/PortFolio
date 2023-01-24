import React from 'react'
import Nodejs from "../../../assets/nodejs.webp"
import ExpressJs from "../../../assets/expresss.webp"
import Mongodb from "../../../assets/mongodb.webp"

let image = [Nodejs,ExpressJs,Mongodb]

const Backend = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:pb-12 sm:pb-8 xs:pb-8'>
        <p className='text-3xl font-semibold font-Sofia border-b-2 w-44 pb-3 xs:ml-10 lg:ml-0'>BackEnd</p>
        <div className=' lg:gap-5 xs:gap-4    grid lg:grid-cols-6 xs:grid-cols-4 lg:py-10 xs:py-8  '>
            {image?.map((img,ind)=>{
                return (<div className=' flex items-center justify-center text-center'><img src={img} alt={img} className={`mx-auto  ${ind == 1 ? "md:w-48 sm:w-32 xs:w-24" : "md:w-16 sm:w-12 xs:w-10"} `} /></div>)
            })}
        </div>

    </div>
  )
}

export default Backend