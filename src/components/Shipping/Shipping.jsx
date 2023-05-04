import React,{ useContext } from 'react'
import './Shipping.css'
import LanguageContext from '../../context/LanguageContext'

const Shipping = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className='divShipping'>{texts.LandingMenu.Shipping}</body>
  )
}

export default Shipping