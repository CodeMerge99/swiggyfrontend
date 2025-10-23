import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import RestaurantCard from './components/RestaurantCard'
import {Routes,Route} from "react-router"
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/Restaurantmenu'
function App() {
  

  return (
    <>
      <div className='app'>
        <Header/>
       <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path='/about'element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
        <Route path="/*" element={<Error/>}/>
       </Routes>
      </div>
    </>
  )
}



export default App
