import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageContextProvider from "./context/languageContext";
import myInfo from "./constants/data/myInfo";

document.title = myInfo.general.fullName;

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>
);
