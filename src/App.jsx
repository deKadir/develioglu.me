import Cursor from "./components/cursor";
import Background from "./components/background";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import ScrollMouse from "./components/scrollMouse";
import LanguageSwitch from "./components/languageSwitch";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Background />
      <Cursor />
      <ScrollMouse />
      <LanguageSwitch />
      <div
        id="container"
        className="max-w-[1200px] mx-auto relative flex  items-start justify-start p-4 lg:p-0  min-h-full"
      >
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
