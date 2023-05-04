import React,{useContext} from 'react'
import LanguageContext from '../../../context/LanguageContext'
import './Contact.css'

const Contact = () => {
    const {texts} = useContext(LanguageContext)
  return (
    <body className='divContact'>{texts.LandingMenu.contact}</body>
  )
}

export default Contact