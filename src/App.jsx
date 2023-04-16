import { useLayoutEffect, useReducer, forwardRef, useRef } from "react";
import myInfo from "./constants/data/myInfo";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cn from "classnames";
import carouselResponsive from "./constants/config/carousel";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS & SASS",
  "Tailwind",
  "Javascript",
  "React js",
  "Next js",
  "Svelte kit",
  "Redux",
  "React Query",
];

const projects = [
  {
    title: "Cubook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto quod",
    url: "https://google.com",
    tags: ["React", "React Query", "Tailwind", "Socket"],
  },
  {
    title: "Spotify Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto quod",
    url: "https://google.com",
    tags: ["Svelte", "React Query", "Tailwind", "Socket"],
  },
  {
    title: "SpaceX Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto quod",
    url: "https://google.com",
    tags: ["Svelte", "React Query", "Tailwind", "Socket"],
  },
  {
    title: "Test 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto quod",
    url: "https://google.com",
    tags: ["Svelte", "React Query", "Tailwind", "Socket"],
  },
  {
    title: "Test 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto quod",
    url: "https://google.com",
    tags: ["Svelte", "React Query", "Tailwind", "Socket"],
  },
];

const menuItems = ["General", "Frontend", "Backend", "Mobile"];
const experiences = [
  {
    title: "Freelancer",
    duration: "2021-present",
    positions: ["Frontend Developer", "Backend Developer", "Mobile Developer"],
    startDate: "10/2021",
    endDate: "present",
  },
  {
    title: "Legacy Software",
    duration: "2022-present",
    positions: ["Frontend Developer"],
    startDate: "11/2022",
    endDate: "present",
  },
];
gsap.registerPlugin(ScrollTrigger);
function App() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      document.querySelector("#general"),
      {
        opacity: 1,
      },
      { opacity: 0 }
    )
      .to(document.querySelector("#hover"), { top: 45 })
      .fromTo(document.querySelector("#frontend"), { opacity: 0 }, { opacity: 1 })
      .fromTo(document.querySelector("#frontend"), { opacity: 1 }, { opacity: 0 })
      .to(document.querySelector("#hover"), { top: 90 })
      .fromTo(document.querySelector("#backend"), { opacity: 0 }, { opacity: 1 })
      .fromTo(document.querySelector("#backend"), { opacity: 1 }, { opacity: 0 })
      .to(document.querySelector("#hover"), { top: 135 })
      .fromTo(document.querySelector("#mobile"), { opacity: 0 }, { opacity: 1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: document.querySelector("#container"),
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
    });
  }, []);
  return (
    <div id="container" className="flex h-full bg-primary">
      <aside className="!w-96  h-full">
        <div className="p-4 ">
          <div class="perspective-9 ">
            <img
              className="-rotate-z-5 rotate-y-20"
              src={myInfo.profileImg}
              alt={myInfo.fullName}
            />
          </div>
          <ul className="text-accent text-2xl flex flex-col gap-y-4 mt-6">
            <li className="flex items-center gap-4">
              <MdLocationOn className="fill-white" />
              <p className="text-sm">{myInfo.location}</p>
            </li>
            <li className="flex items-center gap-4">
              <MdEmail className="fill-white" />
              <p className="text-sm">{myInfo.email}</p>
            </li>
            <li className="flex items-center gap-4">
              <BsGithub className="fill-white" />
              <p className="text-sm">{myInfo.github}</p>
            </li>
            <li className="flex items-center gap-4">
              <BsLinkedin className="fill-white" />
              <p className="text-sm">{myInfo.linkedin}</p>
            </li>
            <li className="flex items-center gap-4">
              <BsFillTelephoneFill className="fill-white" />
              <p className="text-sm">{myInfo.phone}</p>
            </li>
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
      </aside>

      <main className="w-full h-full relative">
        <Section id="general" className="z-10 ">
          <Heading>Abdulkadir Develioglu</Heading>
          <Caption className="w-3/4 mt-2 text-tertiary text font-medium">
            MERN Stack web developer with experience of Mongodb , Express js , React js ,Next js,
            Node js for more than a year. Mainly interested in Frontend Development. Focused on
            learning new technologies, dedicated learner who tries to improve his coding skills.
          </Caption>
          <div className="text-light  inline-block text-left">
            <Title>Education</Title>
            <p className="font-bold  text-xl text-accent">Cukurova University</p>
            <p className="font-medium mt-1 text-accent">Computer Engineering (English)</p>
            <span className=" block mt-2 font-normal text-xs text-accent ">2019-2024</span>
          </div>

          <Title>Work Experience</Title>
          <ul className="flex gap-2">
            {experiences.map((exp) => {
              return (
                <li className="flex flex-col gap-2 bg-secondary rounded-md min-w-[300px] p-8">
                  <p className="text-txtPrimary text-xl">{exp.title}</p>
                  <ul>
                    {exp.positions.map((exp) => (
                      <p className="relative before:content-['\2713'] before:mr-2 text-accent text-xl">
                        {exp}
                      </p>
                    ))}
                  </ul>
                  <p className="text-right mt-2 text-accent">{`${exp.startDate} - ${exp.endDate}`}</p>
                </li>
              );
            })}
          </ul>
          <Title>Languages</Title>
          <ul className="text-light font-medium flex flex-col gap-1">
            {["Turkish", "English"].map((l) => (
              <li className="flex items-center">
                <span className="relative before:content-['\2713'] w-6 h-6 before:absolute before:left-[6px] bg-secondary rounded-full mr-2"></span>
                <p>{l}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="frontend" className="z-9">
          <Heading>Frontend Developer</Heading>
          <Caption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto
            quod sint ut assumenda optio cupiditate obcaecati aliquam unde dolor consequuntur
            similique harum nam laboriosam commodi! Laudantium, recusandae tempore. Iusto facilis
            ullam, animi iste voluptatibus labore quam nisi aliquid?
          </Caption>
          <Title>Skills</Title>
          <ul className="flex gap-2">
            {skills.map((s) => (
              <li>
                <Skill>{s}</Skill>
              </li>
            ))}
          </ul>
          <Title>Projects</Title>

          <Carousel
            responsive={carouselResponsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {projects.map((p) => (
              <div className=" flex  flex-col items-start bg-secondary  p-8 max-w-[300px] mr-2">
                <p className="text-txtPrimary text-2xl">{p.title}</p>
                <p className="p-1 text-base text-accent">{p.description}</p>
                <button className="border-2 border-txtPrimary px-4 py-2 text-txtPrimary rounded-full self-end uppercase">
                  View
                </button>
              </div>
            ))}
          </Carousel>
        </Section>
        <Section id="backend" className="z-8">
          <Heading>Backend Developer</Heading>
          <Caption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto
            quod sint ut assumenda optio cupiditate obcaecati aliquam unde dolor consequuntur
            similique harum nam laboriosam commodi! Laudantium, recusandae tempore. Iusto facilis
            ullam, animi iste voluptatibus labore quam nisi aliquid?
          </Caption>
          <Title>Skills</Title>
          <ul className="flex gap-2">
            {skills.map((s) => (
              <li>
                <Skill>{s}</Skill>
              </li>
            ))}
          </ul>
          <Title>Projects</Title>

          <Carousel
            responsive={carouselResponsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {projects.map((p) => (
              <div className=" flex  flex-col items-start bg-secondary  p-8 max-w-[300px] mr-2">
                <p className="text-txtPrimary text-2xl">{p.title}</p>
                <p className="p-1 text-base text-accent">{p.description}</p>
                <button className="border-2 border-txtPrimary px-4 py-2 text-txtPrimary rounded-full self-end uppercase">
                  View
                </button>
              </div>
            ))}
          </Carousel>
        </Section>
        <Section id="mobile" className="z-7">
          <Heading>Mobile Developer</Heading>
          <Caption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis, architecto
            quod sint ut assumenda optio cupiditate obcaecati aliquam unde dolor consequuntur
            similique harum nam laboriosam commodi! Laudantium, recusandae tempore. Iusto facilis
            ullam, animi iste voluptatibus labore quam nisi aliquid?
          </Caption>
          <Title>Skills</Title>
          <ul className="flex gap-2">
            {skills.map((s) => (
              <li>
                <Skill>{s}</Skill>
              </li>
            ))}
          </ul>
          <Title>Projects</Title>

          <Carousel
            responsive={carouselResponsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {projects.map((p) => (
              <div className=" flex  flex-col items-start bg-secondary  p-8 max-w-[300px] mr-2">
                <p className="text-txtPrimary text-2xl">{p.title}</p>
                <p className="p-1 text-base text-accent">{p.description}</p>
                <button className="border-2 border-txtPrimary px-4 py-2 text-txtPrimary rounded-full self-end uppercase">
                  View
                </button>
              </div>
            ))}
          </Carousel>
        </Section>
      </main>
      <div class="field">
        <div class="mouse"></div>
        <div class="scroll"></div>
        <div class="arrow"></div>
      </div>
    </div>
  );
}

export default App;

const Section = ({ children, className, ...others }) => {
  return (
    <section {...others} className={cn("w-full p-4 absolute top-0", className)}>
      {children}
    </section>
  );
};
const Heading = ({ children }) => {
  return <h1 className="text-[4rem]  font-normal text-txtPrimary">{children}</h1>;
};
const Caption = ({ children }) => {
  return <p className="text-lg font-normal text-accent">{children}</p>;
};

const Title = ({ children }) => {
  return <h2 className="my-4 text-txtPrimary text-3xl">{children}</h2>;
};

const Skill = ({ children }) => {
  return (
    <div className="bg-secondary cursor-pointer text-accent text-xl px-4 py-2 rounded-full">
      {children}
    </div>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute left-0 w-[42px] h-[42px] border border-txtPrimary z-10 rounded-full "
      onClick={onClick}
    >
      <span className="relative before:absolute before:content-['\279C'] inline-block text-txtPrimary before:-left-[8px] before:rotate-180 before:-top-[18px]"></span>
    </button>
  );
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute right-0 w-[42px] h-[42px] border border-txtPrimary z-10 rounded-full "
      onClick={onClick}
    >
      <span className="relative before:absolute before:content-['\279C'] inline-block text-txtPrimary before:-left-[8px] z-10 before:-top-[16px] "></span>
    </button>
  );
};
