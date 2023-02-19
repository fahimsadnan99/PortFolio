import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import CopyRight from "./components/Home/CopyRight/CopyRight"
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet />
    <CopyRight></CopyRight>
    </>
  )
}

export default App