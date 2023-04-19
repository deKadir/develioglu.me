import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

function SidebarContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default SidebarContextProvider;

const useSidebar = () => {
  return useContext(SidebarContext);
};
export { useSidebar };
