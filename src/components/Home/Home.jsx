import React, { useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'
import "./Home.css"
const Home = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className='divHome'>{texts.Home.Home}</body>
  )
}

export default Home