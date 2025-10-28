import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import RestaurantCard from './components/RestaurantCard'

import { Routes, Route } from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/Restaurantmenu'
import UserContext from './utils/UserContext'
import Cart from './components/Cart'

function App() {
  
const[userName,setUserName] = useState();
useEffect(()=>{
  const data = {
    name:"Piyush",
  }
   setUserName(data.name);
},[])
  return (
    <>
     <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className='app'>
        <Header/>
       <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path='/about'element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/*" element={<Error/>}/>
       </Routes>
      </div>
      </UserContext.Provider>
    </>
  )
}



export default App
