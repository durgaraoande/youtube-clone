import React from 'react'
import Header from './Header'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { Outlet } from 'react-router-dom'
import Categories from './Categories'

const Body = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
      <Categories/>
      <Provider store={appStore}>
        <Outlet />
      </Provider>
      </div>
    </div>
  )
}

export default Body
