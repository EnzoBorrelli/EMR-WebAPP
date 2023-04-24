import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingMenu from './LandingMenu/LandingMenu'
import Home from './Home/Home';
import About from './AboutUS/About';
const NavMenu = () => {
  return (
    <BrowserRouter>
    <LandingMenu/>
        <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/Home' element={<Home/>}/>
<Route exact path='/About' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default NavMenu