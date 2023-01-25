import React from 'react'
import Nodejs from "../../../assets/nodejs.webp"
import ExpressJs from "../../../assets/expresss.webp"
import Mongodb from "../../../assets/mongodb.webp"

let image = [Nodejs,ExpressJs,Mongodb]

const Backend = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:pb-12 sm:pb-8 xs:pb-8'>
        <p className='md:text-3xl xs:text-xl font-semibold font-Sofia border-b-2 lg:w-44 md:w-32 sm:w-28 xs:w-24 md:pb-3 xs:pb-1 xs:ml-10 lg:ml-0'>BackEnd</p>
        <div className=' lg:gap-5 xs:gap-2    grid lg:grid-cols-6 xs:grid-cols-4 lg:py-10 xs:py-8  '>
            {image?.map((img,ind)=>{
                return (<div className=' flex items-center justify-center text-center'><img src={img} alt={img} className={`mx-auto  ${ind == 1 ? "xs:h-10 sm:h-16 sm:w-32 xs:w-20" : "md:w-20 sm:w-12 xs:w-10"} bg-yellow-50 rounded-md shadow-xl sm:p-3 xs:p-1`} /></div>)
            })}
        </div>

    </div>
  )
}

export default Backend