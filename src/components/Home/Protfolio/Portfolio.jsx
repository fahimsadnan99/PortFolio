import React from 'react'
import Card from './Card'
import { cardItm } from '../../../hooks/CardItem'




const Portfolio = () => {
  return (
    <div className='  py-20 bg-yellow-100 dark:bg-black'>
      <div className='px-10'>
      <p className='lg:text-4xl xs:text-2xl font-semibold text-center border-b-4 lg:w-56 xs:w-48 sm:w-52 mx-auto border-purple-500 pb-4 dark:text-white'>Portfolio</p>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 w-full gap-5'>
        {
          cardItm?.map((item,ind)=>{
            return  <Card key={ind} item={item}></Card>
          })
        }
 
      </div>
                   </div>
    </div>
  )
}

export default Portfolio