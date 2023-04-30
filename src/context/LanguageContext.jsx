import { createContext, useState } from "react";
import { LanguageList } from "../languages";

const LanguageContext = createContext();

const initialLanguage = "es";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(LanguageList[language]);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(LanguageList.es);
    } else if(e.target.value === "en") {
      setLanguage("en");
      setTexts(LanguageList.en);
    }
    else{
      setLanguage("br");
      setTexts(LanguageList.br);
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;