import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import {BsFillSunFill,BsFillMoonStarsFill} from "react-icons/bs"
import "./style.css"
import Logo from "../assets/Gold Luxury Logo of King Perfume Brand identity.gif"
const Navbar = () => {
    let [open,setOpen] = useState(true)
    let [darkMood,setDarkMood] = useState(false)
    let NabLink = [
        {
            name : "Home", link : "#Home"
        },
        {
            name : "About", link : "#About"
        },
        {
            name : "Skills", link : "#Skills"
        },
        {
            name : "Portfolio", link : "#Portfolio"
        },
        {
            name : "Contact", link : "#Contact"
        }
    ]


    useEffect(()=>{
        if(darkMood){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }

    },[darkMood])
  return (
    <div className='w-full shadow-md fixed top-0 left-0 z-[999] '>
        <div className='bg-darkColor  md:px-10 md:flex items-center justify-between xs:py-4 md:py-0'>
        <a className=' font-bold  md:px-0 dark:text-white' href='#Home'>
            <img src={Logo} alt="logo" className='md:w-32 md:h-20 xs:w-24 xs:h-12' />
         </a>

<div className=' cursor-pointer md:hidden absolute top-5 right-20 text-3xl text-white ' onClick={()=> setOpen(!open)}>
<ion-icon name={open ? "close" :"menu"} ></ion-icon>
</div>


       <ul className={`navbrUl navbarResponsiveMenu ${open ? `top-16 ` : "top-[-499px]"} md:opacity-100 md:z-auto opacity-0 mr-8 font-mukta`}>

 {
    NabLink.map((link,index)=>{
        return (<li key={index} className='md:ml-8'>
           
            <a href={link.link} className='text-xl ' onClick={()=>  setOpen(!open)} >{link.name}</a>
        </li>)
    })
 }
 
       </ul>

       <div className='darmodeIcon' onClick={()=> setDarkMood(!darkMood) }>
        {darkMood ? ( <BsFillSunFill></BsFillSunFill>) :( <BsFillMoonStarsFill></BsFillMoonStarsFill>)} 
       </div>
       </div>
    </div>
  )
}

export default Navbar