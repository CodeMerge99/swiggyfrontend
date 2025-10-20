import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import RestaurantCard from './components/RestaurantCard'

function App() {
  

  return (
    <>
      <div className='app'>
       <Header/> 
       <Body/>
       <RestaurantCard/>
      </div>
    </>
  )
}

export default App
