import { useLayoutEffect, useState } from "react";
import myInfo from "../../constants/data/myInfo";
import { motion } from "framer-motion";
import { duration, delay } from "../../constants/config/animation";
import { gsap } from "gsap";
import cn from "classnames";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menuItems = ["General", "Frontend", "Backend", "Mobile"];

function Sidebar() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    let hoverEl = document.querySelector("#hover");

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.fromTo(
      hoverEl,
      { top: 0 },
      {
        top: 45,
      }
    )
      .fromTo(
        hoverEl,
        { top: 45 },
        {
          top: 90,
        }
      )
      .fromTo(
        hoverEl,
        { top: 90 },
        {
          top: 135,
        }
      );
    ScrollTrigger.create({
      animation: tl,
      start: "top top",
      scrub: true,
    });
  }, []);

  return (
    <>
      <SidebarMobile open={open} setOpen={setOpen} />
      <HamburgerIcon open={open} setOpen={setOpen} />
      <motion.aside
        initial={{ rotateY: 90 }}
        whileInView={{ rotateY: 0 }}
        transition={{ duration, delay }}
        className="hidden lg:block w-72 sticky top-0  shrink-0 h-full "
      >
        <div className="p-4 ">
          <div className="perspective-9 ">
            <img src={myInfo.profileImg} alt={myInfo.fullName} />
          </div>
          <ul className="text-accent text-2xl flex flex-col gap-y-4 mt-6">
            {myInfo.socialLinks.map((link, key) => (
              <li key={key}>
                <a
                  href={link.url}
                  className="flex items-center gap-4"
                  target="_blank"
                >
                  <link.icon className="fill-white" />
                  <p className="text-lg">{link.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav>
          <ul className="relative flex flex-col mt-2">
            <div
              id="hover"
              className="absolute top-0 py-2  bg-secondary text-opacity-0 left-0 right-0 "
              style={{
                clipPath:
                  "polygon(5% 0, 101% 0, 100% 50%, 101% 100%, 5% 100%, 0% 50%)",
                top: 0,
              }}
            >
              &nbsp;
            </div>
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="relative z-10 py-2 font-medium text-xl text-accent text-center -pr-1 "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>
    </>
  );
}

export default Sidebar;

const SidebarMobile = ({ open, setOpen }) => {
  return (
    <aside
      className={cn({
        "fixed w-full max-w-[400px] h-full top-0 z-[100] bg-secondary transition-all duration-700 ": true,
        "left-0": open,
        "-left-[100%]": !open,
      })}
    >
      <nav className="text-accent flex flex-col py-10 px-4">
        <motion.h1
          className="text-txtPrimary text-4xl mb-6"
          initial="initial"
          animate={open ? "animate" : "initial"}
          variants={{
            initial: {
              opacity: 0,
              x: -15,
            },
            animate: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                duration: 0.3,
              },
            },
          }}
        >
          Abdulkadir Develioglu
        </motion.h1>
        <motion.p
          className="mb-2 uppercase"
          initial="initial"
          animate={open ? "animate" : "initial"}
          variants={{
            initial: {
              opacity: 0,
              x: -15,
            },
            animate: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                duration: 0.3,
              },
            },
          }}
        >
          Contact
        </motion.p>
        <ul className="flex flex-col">
          {myInfo.socialLinks.map((link, i) => (
            <motion.li
              initial="initial"
              animate={open ? "animate" : "initial"}
              key={i}
              variants={{
                initial: {
                  opacity: 0,
                  y: -15,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * i + 1,
                    duration: 0.3,
                  },
                },
              }}
            >
              <a
                href={link.url}
                target="_blank"
                className="flex items-center gap-4 py-2"
              >
                <link.icon />
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const HamburgerIcon = ({ open, setOpen }) => {
  const handleOpen = () => setOpen((o) => !o);

  return (
    <button
      aria-label="open menu"
      className="gap-1 lg:hidden fixed right-2 top-2 px-3 py-4 gap-0 z-[999] bg-secondary"
      onClick={handleOpen}
    >
      <span
        className={cn({
          "bg-accent block w-6 h-[2px] transition-all duration-500": true,
          "translate-y-[1px] rotate-45": open,
          "mb-[2px]": !open,
        })}
      ></span>
      <span
        className={cn({
          "bg-accent block w-6 h-[2px] transition-all duration-500": true,
          "-translate-y-[1px] -rotate-45": open,
        })}
      ></span>
    </button>
  );
};
