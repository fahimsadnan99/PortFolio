import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {TypeText} from "../../../../utils/TypeText.Js"

const TypeWriter = ({dag}) => {
 
  return (
   <p className=' shadow-md bg-transparent dark:text-white text-xl font-semibold text-darkColor shadow-orange-700/30 dark:shadow-white rounded-xl p-2'>
    <Typewriter
      words={[TypeText(dag) ]}
      typeSpeed={40}
    
     
      
    />
    </p>
  )
}

export default TypeWriter

