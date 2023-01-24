import React from 'react'
import Img from "../../../assets/hotelBooking.png"
import { FiLink } from "react-icons/fi"

const Card = ({item}) => {
  return (
    <div className='ring-1 rounded-md dark:ring-white relative portfolio duration-500 transition-all mt-14 xs:mt-6 sm:mt-10'>
      <p className='dark:text-white text-xl font-semibold font-Sofia p-3  '>{item.name}</p>
         <img src={item.img} alt="img" className='aspect-[3/2]'/>
         <div className='grid grid-cols-3 gap-2 p-3'>
         <p className='font-bold font-Sofia text-xl text-purple-900'>Tools :-</p>
         {item?.tools.map((tool,i)=>{
          return ( <p key={i} className='font-bold font-Sofia text-xl dark:text-white'>{tool}</p>
        
          )
         })}
          
         </div>
        
          <a href={item.link} className='text-white absolute top-0 left-0 w-full bg-purple-400/25 h-full rounded-md flex items-center justify-center text-5xl cursor-pointer duration-500 transition-all ease-in protfolioLink' ><FiLink></FiLink></a>
         
    </div>
  )
}

export default Card


