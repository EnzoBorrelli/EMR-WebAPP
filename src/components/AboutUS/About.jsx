import React,{useContext} from 'react'
import "./About.css"
import LanguageContext from '../../context/LanguageContext'
const About = () => {
  const {texts} = useContext(LanguageContext)
  return (
    <body className='divAboutUs'>{texts.LandingMenu.AboutUs}</body>
  )
}

export default About