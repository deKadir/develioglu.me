import Cursor from "./components/cursor";
import Background from "./components/background";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

function App() {
  // useLayoutEffect(() => {
  //   //gsap animations
  //   if (window.innerWidth > 1200) {
  //     const tl = gsap.timeline();
  //     tl.fromTo(
  //       document.querySelector("#general"),
  //       {
  //         opacity: 1,
  //         zIndex: 10,
  //       },
  //       { opacity: 0, zIndex: 0 }
  //     )
  //       .to(document.querySelector("#hover"), { top: 45 })
  //       .fromTo(document.querySelector("#frontend"), { opacity: 0 }, { opacity: 1, zIndex: 10 })
  //       .fromTo(document.querySelector("#frontend"), { opacity: 1 }, { opacity: 0, zIndex: 0 })
  //       .to(document.querySelector("#hover"), { top: 90 })
  //       .fromTo(document.querySelector("#backend"), { opacity: 0 }, { opacity: 1, zIndex: 10 })
  //       .fromTo(document.querySelector("#backend"), { opacity: 1 }, { opacity: 0, zIndex: 0 })
  //       .to(document.querySelector("#hover"), { top: 135 })
  //       .fromTo(document.querySelector("#mobile"), { opacity: 0 }, { opacity: 1, zIndex: 10 });
  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger: document.querySelector("#container"),
  //       start: "top top",
  //       end: "+=300%",
  //       scrub: true,
  //       pin: true,
  //     });
  //   }
  //   window.addEventListener("resize", (e) => {
  //     if (window.innerWidth < 1200) {
  //       ScrollTrigger.killAll();
  //     } else {
  //       ScrollTrigger.killAll();
  //       ScrollTrigger.create({
  //         animation: tl,
  //         trigger: document.querySelector("#container"),
  //         start: "top top",
  //         end: "+=300%",
  //         scrub: true,
  //         pin: true,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <>
      <Background />
      <Cursor />
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
