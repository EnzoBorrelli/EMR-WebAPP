import React from 'react'
import LanguageContext from '../../context/LanguageContext';
import './Payment.css'

const Payment = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <div>{texts.LandingMenu.Payment}</div>
  )
}

export default Payment