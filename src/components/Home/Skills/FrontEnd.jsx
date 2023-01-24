import React from 'react'
import Html from "../../../assets/HTML5.webp"
import Css from "../../../assets/css.webp"
import Scss from "../../../assets/scss.webp"
import BootStarap from "../../../assets/bootstrap-5-logo-icon.webp"
import Tailwind from "../../../assets/ftailwind.webp"	
import Chakra from "../../../assets/chakra.webp"
import MatarialUi from "../../../assets/material-ui.webp"
import Js from "../../../assets/js.webp"
// import TypeScript from "../../../assets/typescrip.webp"
import ReactJs from "../../../assets/reactJs.webp"
// import Nextjs from "../../../assets/next-jswebp.webp"
import Redux from "../../../assets/redux.webp"
import Query from "../../../assets/react-query.webp"

let image = [Html,Css,Scss,BootStarap,Tailwind,Chakra,MatarialUi,Js,ReactJs,Redux,Query]

const FrontEnd = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:py-12 sm:py-8 xs:py-8'>
        <p className='text-3xl font-semibold font-Sofia border-b-2 w-44 pb-3 xs:ml-10 lg:ml-0'>FrontEnd</p>
        <div className=' lg:gap-5 xs:gap-4    grid lg:grid-cols-6 xs:grid-cols-4 lg:py-10 xs:py-8  '>
            {image?.map((img)=>{
                return (<div className=' flex items-center justify-center text-center'><img src={img} alt={img} className='mx-auto md:w-16 sm:w-12 xs:w-10' /></div>)
            })}
        </div>

    </div>
  )
}

export default FrontEnd