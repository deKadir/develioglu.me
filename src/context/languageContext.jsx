import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LanguageContextProvider;

const useLanguage = () => {
  return useContext(LanguageContext);
};
export { useLanguage };
