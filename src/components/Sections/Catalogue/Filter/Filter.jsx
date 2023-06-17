import React, { useContext } from "react";
import "./Filter.css";
import LanguageContext from "../../../../context/LanguageContext";

const Filter = ({SetFilter}) => {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="Filter">
      <h3 className="Filter-H3">Filtros</h3>
      <div className="Filter-option">
        <h2 className="Filter-h2">{texts.sections.Catalogue.Category}</h2>
        <button className="Filter-btn" onClick={()=>SetFilter("minisumo")}>Sumo</button>
        <button className="Filter-btn">MiniSumo</button>
        <button className="Filter-btn">{texts.sections.Catalogue.speedy}</button>
        <button className="Filter-btn">{texts.sections.Catalogue.lab}</button>
        <button className="Filter-btn">{texts.sections.Catalogue.futbol}</button>
      </div>
      <div className="Filter-option">
        <h2 className="Filter-h2">option</h2>
        <button className="Filter-btn">item1</button>
        <button className="Filter-btn">item2</button>
        <button className="Filter-btn">item3</button>
        <button className="Filter-btn">item4</button>
        <button className="Filter-btn">item5</button>
      </div>
      <button className="Filter-Payments">Metodos de pago</button>
    </div>
  );
};

export default Filter;
