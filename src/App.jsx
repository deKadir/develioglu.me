import myInfo from "./constants/data/myInfo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import cn from "classnames";
import Cursor from "./components/cursor";
import CustomCarousel from "./components/carousel";
import Background from "./components/background";

const menuItems = ["General", "Frontend", "Backend", "Mobile"];
const delay = 0.1;
const duration = 0.8;
gsap.registerPlugin(ScrollTrigger);
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
      <div style={{ background: "red" }}>
        <Cursor />

        <div
          id="container"
          className="max-w-[1200px] mx-auto relative flex  items-start justify-start p-4 lg:p-0  min-h-full"
        >
          <motion.aside
            initial={{ rotateY: 90 }}
            whileInView={{ rotateY: 0 }}
            transition={{ duration, delay }}
            className="hidden lg:block w-72 sticky top-0  shrink-0 h-full "
          >
            <div className="p-4 ">
              <div class="perspective-9 ">
                <img
                  className="-rotate-z-5 rotate-y-20"
                  src={myInfo.profileImg}
                  alt={myInfo.fullName}
                />
              </div>
              <ul className="text-accent text-2xl flex flex-col gap-y-4 mt-6">
                {myInfo.socialLinks.map((link) => (
                  <li>
                    <a href={link.url} className="flex items-center gap-4" target="_blank">
                      <link.icon className="fill-white" />
                      <p className="text-lg">{link.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="relative flex flex-col mt-2">
              <div
                id="hover"
                className="absolute top-0 py-2  bg-secondary text-opacity-0 left-0 right-0 "
                style={{
                  clipPath: "polygon(5% 0, 101% 0, 100% 50%, 101% 100%, 5% 100%, 0% 50%)",
                }}
              >
                &nbsp;
              </div>
              {menuItems.map((item, i) => (
                <li className="relative z-10 py-2 font-medium text-xl text-accent text-center -pr-1 ">
                  {item}
                </li>
              ))}
            </ul>
          </motion.aside>
          <main className="w-full lg:w-[calc(100%_-_288px)] h-full mx-auto mt-6 lg:px-4 overflow-x-hidden">
            <Section id="general">
              <Heading>{myInfo.general.fullName}</Heading>
              <Caption
                className="w-3/4 mt-2 text-tertiary text font-medium"
                // dangerouslySetInnerHTML={{ __html: "<h1>hello </h1>" }}
              >
                As a <mark>MERN stack</mark> developer with over a year of experience, I possess a
                deep understanding of the tools and technologies required to build high-quality{" "}
                <mark>web</mark> and <mark>mobile</mark> applications. With experience in{" "}
                <mark> both frontend </mark> and <mark> backend </mark> development, I am able to
                create responsive, pixel perfect and dynamic user interfaces, as well as robust and
                scalable backend systems.
              </Caption>
              <div className="text-light  inline-block text-left mb-4">
                <Title>Education</Title>
                {myInfo.general.education.map((ed) => (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay, duration }}
                  >
                    <p className="font-bold  text-xl text-accent">{ed.university}</p>
                    <p className="font-medium mt-1 text-accent">{ed.department}</p>
                    <span className=" block mt-2 font-normal text-xs text-accent text-right">
                      {ed.date.start + "-" + ed.date.end}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Title>Work Experience</Title>
              <CustomCarousel
                items={myInfo.general.experiences}
                className="mb-4"
                renderItem={(exp) => (
                  <motion.div
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex w-full flex-col gap-2 bg-secondary rounded-md h-full w-1/ lg:min-w-[300px] p-8"
                  >
                    <p className="text-txtPrimary text-xl">{exp.title}</p>
                    <ul>
                      {exp.positions.map((exp) => (
                        <li className="relative before:content-['\2713'] before:mr-2 text-accent text-xl">
                          {exp}
                        </li>
                      ))}
                    </ul>
                    <p className="text-right mt-2 text-accent mt-auto">{`${exp.startDate} - ${exp.endDate}`}</p>
                  </motion.div>
                )}
              />

              <Title>Languages</Title>
              <ul className="text-light mb-4 font-medium flex flex-col gap-1">
                {myInfo.general.languages.map((l) => (
                  <li className="flex items-center">
                    <span className="relative before:content-['\2713'] w-6 h-6 before:absolute before:left-[6px] bg-secondary rounded-full mr-2"></span>
                    <p>{l}</p>
                  </li>
                ))}
              </ul>
            </Section>
            <Section id="frontend">
              <Heading>Frontend Development</Heading>
              <Caption>
                A frontend developer specializing in single page application frameworks, I bring a
                wealth of expertise to the development of dynamic, responsive web applications. With
                proficiency in frameworks such as React, Next or Svelte, I am able to create
                engaging user interfaces that provide an intuitive user experience and are optimized
                for performance.
              </Caption>
              <Title>Skills</Title>
              <Skills>
                {myInfo.frontend.skills.map((s) => (
                  <li>
                    <Skill>{s}</Skill>
                  </li>
                ))}
              </Skills>
              <Title>Projects</Title>
              <CustomCarousel
                items={myInfo.frontend.projects}
                className="mb-4"
                itemClass="mr-2"
                renderItem={(p) => <ProjectItem {...p} />}
              />
            </Section>

            <Section id="backend">
              <Heading>Backend Development</Heading>
              <Caption>
                As a backend developer specializing in <mark>Node.js</mark> and <mark>Express</mark>
                , I bring a wealth of expertise to the development of robust and scalable APIs. With
                a focus on reliability and efficiency, I possess a deep understanding of the
                technologies and best practices required to build high-quality backend systems.
              </Caption>
              <Title>Skills</Title>
              <Skills>
                {myInfo.backend.skills.map((s) => (
                  <li>
                    <Skill>{s}</Skill>
                  </li>
                ))}
              </Skills>
              <Title>Projects</Title>
              <CustomCarousel
                className="mb-4"
                items={myInfo.backend.projects}
                renderItem={(p) => <ProjectItem {...p} />}
              />
            </Section>
            <Section id="mobile">
              <Heading>Mobile Development</Heading>
              <Caption>
                As a mobile developer with a focus on <mark>React Native</mark>, I able to create
                high-quality applications that meet the needs of clients and end-users alike. With a
                deep understanding of mobile development best practices and a commitment to staying
                up-to-date with the latest industry trends, I am able to deliver cutting-edge
                solutions that exceed expectations.
              </Caption>
              <Title>Skills</Title>
              <Skills>
                {myInfo.mobile.skills.map((s) => (
                  <li>
                    <Skill>{s}</Skill>
                  </li>
                ))}
              </Skills>
              <Title>Projects</Title>
              <CustomCarousel
                className="mb-4"
                items={myInfo.mobile.projects}
                renderItem={(p) => <ProjectItem {...p} />}
              />
            </Section>
          </main>

          {/* <div class="field">
          <div class="mouse"></div>
          <div class="scroll"></div>
          <div class="arrow"></div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default App;

const Section = ({ children, className, ...others }) => {
  return (
    <section {...others} className={cn("lg:min-h-screen w-auto", className)}>
      {children}
    </section>
  );
};
const Heading = ({ children }) => {
  return (
    <motion.h1
      className="text-4xl  mb-4 md:text-5xl lg:mb-6 lg:text-[3rem]  font-normal text-txtPrimary"
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay, duration }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.h1>
  );
};
const Caption = ({ children, ...others }) => {
  return (
    <motion.p
      {...others}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      className=" text-base mb-4 md:text-lg lg:text-xl lg:mb-6 font-normal text-accent"
    >
      {children}
    </motion.p>
  );
};

const Title = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      className="mb-4 text-txtPrimary text-2xl lg:text-3xl"
    >
      {children}
    </motion.h2>
  );
};

const Skill = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      className=" bg-secondary cursor-pointer text-accent text-base px-2 py-1 lg:text-xl lg:px-4 lg:py-2 rounded-full"
    >
      {children}
    </motion.div>
  );
};

const ProjectItem = (p) => {
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col items-start bg-secondary  p-6 lg:p-8  mr-2"
    >
      <p className="text-txtPrimary text-2xl">{p.title}</p>
      <p className="p-1 text-base lg:text-lg text-accent my-2 lg:my-3">{p.description}</p>
      <a
        href={p.url}
        target="_blank"
        className="border-2 border-txtPrimary px-4 py-2 text-txtPrimary rounded-full self-end uppercase mt-auto"
      >
        View
      </a>
    </motion.div>
  );
};

const Skills = ({ children }) => {
  return <ul className="flex gap-2 flex-wrap mb-4">{children}</ul>;
};
