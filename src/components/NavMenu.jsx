import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingMenu from './LandingMenu/LandingMenu'
import Inicio from './Inicio/Inicio';
import Sobre from './SobreNosotros/Sobre';
const NavMenu = () => {
  return (
    <BrowserRouter>
    <LandingMenu/>
        <Routes>
<Route exact path='/' element={<Inicio/>}/>
<Route exact path='/Inicio' element={<Inicio/>}/>
<Route exact path='/Sobre' element={<Sobre/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default NavMenu