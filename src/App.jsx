import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import CopyRight from "./components/Home/CopyRight/CopyRight"
import Intro  from "./assets/intro.gif"
const App = () => {
  let [intros,setIntros] = useState(true)
console.log(intros);
  useEffect(()=>{
     let timeOut = setTimeout(()=>{
      setIntros(false)
     },2000)
     return ()=> clearTimeout(timeOut)
  },[])
  

  return (
    <>
    {intros ? ( <div className='h-screen w-full'>
        <img src={Intro} className='h-screen w-full' />
      </div>) : (<>
         <Navbar></Navbar>
         <Outlet />
         <CopyRight></CopyRight>
  </>
      )
    }
   
    </>
  )
}

export default App