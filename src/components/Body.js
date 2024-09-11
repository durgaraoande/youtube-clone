import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Categories from './Categories'

const Body = () => {
  const hamMenu=useSelector((state)=>state.config.hamMenu)
  return (
    <div>
      <Header />
      <div className='flex'>
      {hamMenu &&<Categories/>}
      <Outlet/>
      </div>
    </div>
  )
}

export default Body
