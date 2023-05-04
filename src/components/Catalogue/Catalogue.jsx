import React,{useContext} from 'react'
import LanguageContext from '../../context/LanguageContext'
import './Catalogue.css'

const Catalogue = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className='divCatalogue'>{texts.LandingMenu.Catalogue}</body>
  )
}

export default Catalogue



