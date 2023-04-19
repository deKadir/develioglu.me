import { motion } from "framer-motion";
import myInfo from "../../constants/data/myInfo";
import CustomCarousel from "../carousel";
import cn from "classnames";
import { x, duration, delay } from "../../constants/config/animation.js";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "react-use-smooth-scroll/dist/index.css";

function Content() {
  return (
    <main className="w-full lg:w-[calc(100%_-_288px)] h-full mx-auto mt-6 lg:px-4 overflow-x-hidden">
      <UseEffectScroll>
        <Section id="general">
          <Heading>{myInfo.general.fullName}</Heading>
          <Caption
            className="w-3/4 mt-2 text-tertiary text font-medium"
            // dangerouslySetInnerHTML={{ __html: "<h1>hello </h1>" }}
          >
            As a <mark>MERN stack</mark> developer with over a year of experience, I possess a deep
            understanding of the tools and technologies required to build high-quality{" "}
            <mark>web</mark> and <mark>mobile</mark> applications. With experience in{" "}
            <mark> both frontend </mark> and <mark> backend </mark> development, I am able to create
            responsive, pixel perfect and dynamic user interfaces, as well as robust and scalable
            backend systems.
          </Caption>
          <div className="text-light  inline-block text-left mb-4">
            <Title>Education</Title>
            {myInfo.general.education.map((ed) => (
              <motion.div
                initial={{ opacity: 0, x }}
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
            renderItem={(exp) => (
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex w-full flex-col gap-2 bg-secondary h-full w-1/ lg:min-w-[300px] p-8 "
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
            proficiency in frameworks such as React, Next or Svelte, I am able to create engaging
            user interfaces that provide an intuitive user experience and are optimized for
            performance.
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
            As a backend developer specializing in <mark>Node.js</mark> and <mark>Express</mark>, I
            bring a wealth of expertise to the development of robust and scalable APIs. With a focus
            on reliability and efficiency, I possess a deep understanding of the technologies and
            best practices required to build high-quality backend systems.
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
            up-to-date with the latest industry trends, I am able to deliver cutting-edge solutions
            that exceed expectations.
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
      </UseEffectScroll>
    </main>
  );
}

export default Content;

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
      initial={{ opacity: 0, x }}
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
    <div className=" bg-secondary cursor-pointer text-accent text-base px-2 py-1 lg:text-xl lg:px-4 lg:py-2 rounded-full">
      {children}
    </div>
  );
};

const ProjectItem = (p) => {
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col items-start bg-secondary  p-6 lg:p-8 "
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
  return (
    <motion.ul
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      className="flex gap-2 flex-wrap mb-4 items-start"
    >
      {children}
    </motion.ul>
  );
};
