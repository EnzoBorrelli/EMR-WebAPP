import React, { useContext } from "react";
import "./Filter.css";
import LanguageContext from "../../../../context/LanguageContext";
import CurrencyContext from "../../../../context/CurrencyContext";

const Filter = ({SetFilter,SetFilterPrice}) => {
  const { texts } = useContext(LanguageContext);
  const {getCurrency} =useContext(CurrencyContext);
  return (
    <div className="Filter">
      <h3 className="Filter-H3">Filtros</h3>
      <div className="Filter-option">
        <h2 className="Filter-h2">{texts.sections.Catalogue.Category}</h2>
        <button className="Filter-btn" onClick={()=>SetFilter("sumo")}>Sumo</button>
        <button className="Filter-btn" onClick={()=>SetFilter("minisumo")}>MiniSumo</button>
        <button className="Filter-btn" onClick={()=>SetFilter("microsumo")}>MicroSumo</button>
        <button className="Filter-btn" onClick={()=>SetFilter("velocista")}>{texts.sections.Catalogue.speedy}</button>
        <button className="Filter-btn" onClick={()=>SetFilter("futbolista")}>{texts.sections.Catalogue.futbol}</button>
      </div>
      <div className="Filter-option">
        <h2 className="Filter-h2">{texts.sections.Catalogue.price}</h2>
        <button className="Filter-btnB" onClick={()=>SetFilterPrice(5,9.99)}>{getCurrency(5)}{" - "}{getCurrency(9.99)}</button>
        <button className="Filter-btnB" onClick={()=>SetFilterPrice(10,19.99)}>{getCurrency(10)}{" - "}{getCurrency(19.99)}</button>
        <button className="Filter-btnB" onClick={()=>SetFilterPrice(20,49.99)}>{getCurrency(20)}{" - "}{getCurrency(49.99)}</button>
        <button className="Filter-btnB" onClick={()=>SetFilterPrice(50,99.99)}>{getCurrency(50)}{" - "}{getCurrency(99.99)}</button>
        <button className="Filter-btnB" onClick={()=>SetFilterPrice(100,Infinity)}>{texts.sections.Catalogue.moreThan}{getCurrency(100)}</button>
      </div>
      <button className="Filter-Payments">Metodos de pago</button>
    </div>
  );
};

export default Filter;
