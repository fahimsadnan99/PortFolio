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
            name : "Home", link : "/"
        },
        {
            name : "About", link : "/about"
        },
        {
            name : "Skills", link : "/skills"
        },
        {
            name : "Portfolio", link : "/portfolio"
        },
        {
            name : "Contact", link : "/contact"
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
    <div className='w-full shadow-md fixed top-0 left-0 z-[999]'>
        <div className='bg-darkColor   md:px-10 md:flex items-center justify-between'>
        <p className=' font-bold px-7 md:px-0 dark:text-white'>
            <img src={Logo} alt="logo" className='w-32 h-20' />
         </p>

<div className=' cursor-pointer md:hidden absolute top-5 right-20 text-3xl text-white ' onClick={()=> setOpen(!open)}>
<ion-icon name={open ? "close" :"menu"} ></ion-icon>
</div>


       <ul className={`navbrUl navbarResponsiveMenu ${open ? `top-16 ` : "top-[-499px]"} md:opacity-100 md:z-auto opacity-0 mr-8 font-mukta`}>

 {
    NabLink.map((link,index)=>{
        return (<li key={index} className='md:ml-8'>
           
            <NavLink to={link.link} className='text-xl ' onClick={()=>  setOpen(!open)} >{link.name}</NavLink>
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