import { useLayoutEffect, useState } from "react";

const CURSOR_SIZE = 48;

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    document.addEventListener("mousemove", ({ x, y }) => setPos({ x, y }));
    document.addEventListener("mousedown", (e) => {
      //animate class can be found inside index.css
      document.querySelector(".ptr").classList.add("animate");
      setTimeout(() => document.querySelector(".ptr").classList.remove("animate"), 300);
    });
  }, []);

  return (
    <div
      className=" ptr w-12 h-12 border border-brand rounded-full fixed z-20 before:absolute before:w-1 before:h-1 before:bg-brand before:left-[22px] before:top-[22px] before:rounded-full pointer-events-none
      after:absolute after:w-full after:h-full  after:rounded-full after:pointer-events-none after:bg-transparent 
      "
      style={{ left: `${pos.x - CURSOR_SIZE / 2}px`, top: `${pos.y - CURSOR_SIZE / 2}px` }}
    />
  );
}

export default Cursor;
