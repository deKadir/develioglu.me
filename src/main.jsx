import ReactDOM from "react-dom/client";
import App from "./App";
import SidebarContextProvider from "./context/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>
);
