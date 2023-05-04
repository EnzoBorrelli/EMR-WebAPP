import React from 'react'
import LanguageContext from '../../context/LanguageContext'
import './Catalogue.css'

const Catalogue = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <div>{texts.LandingMenu.Catalogue}</div>
  )
}

export default Catalogue



