import React,{ useContext } from 'react'
import './Shipping.css'
import LanguageContext from '../../../context/LanguageContext'

const Shipping = () => {
  const {texts} = useContext(LanguageContext);
  return (
    <body className="Shipping">
      <div className="Shipping-Header">
      <h1 className="Shipping-h1">{texts.sections.Shipping.Title}</h1>
      </div>
      <div className="Shipping-div">
        <p className="Shipping-pi">{texts.sections.Shipping.details}</p>
        <h2 className="Shipping-h2">{texts.sections.Shipping.typeOne}</h2>
        <p className="Shipping-p">{texts.sections.Shipping.typeOneDetails}</p>
        <h2 className="Shipping-h2">{texts.sections.Shipping.typeTwo}</h2>
        <p className="Shipping-p">{texts.sections.Shipping.typeTwoDetails}</p>
        <h2 className="Shipping-h2">{texts.sections.Shipping.typeThree}</h2>
        <p className="Shipping-p">{texts.sections.Shipping.typeThreeDetails}</p>
        <h2 className="Shipping-h2">{texts.sections.Shipping.typeFour}</h2>
        <p className="Shipping-p">{texts.sections.Shipping.typeFourDetails}</p>
      </div>
    </body>
  )
}

export default Shipping