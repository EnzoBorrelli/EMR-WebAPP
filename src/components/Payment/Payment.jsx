import React,{useContext} from 'react'
import LanguageContext from '../../context/LanguageContext';
import './Payment.css'

const Payment = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className='divPayment'>{texts.LandingMenu.Payment}</body>
  )
}

export default Payment