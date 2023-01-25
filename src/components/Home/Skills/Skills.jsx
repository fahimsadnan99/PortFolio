import React from 'react'
import FrontEnd from './FrontEnd'
import Backend from './Backend'
import Others from './Others'

 

const Skills = () => {
  return (
    <div className='pt-24  dark:bg-slate-600 dark:text-white' id="Skills">
    <p className='font-Sofia text-4xl text-center font-semibold border-b-4 border-blue-900 w-36 mx-auto pb-3'>Skills</p>
      <FrontEnd></FrontEnd>
      <Backend></Backend>
      <Others></Others>

    </div>
  )
}

export default Skills