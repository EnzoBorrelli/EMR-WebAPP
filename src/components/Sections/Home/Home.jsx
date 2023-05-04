import React, { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import "./Home.css"
const Home = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className='divHome'>{texts.LandingMenu.Home}</body>
  )
}

export default Home