import ReactDOM from "react-dom/client";
import App from "./App";
import SidebarContextProvider from "./context/sidebarContext";
import myInfo from "./constants/data/myInfo";

document.title = myInfo.general.fullName;

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>
);
