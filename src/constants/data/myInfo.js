import profile from "../../assets/profile.jpg";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";

const myInfo = {
  profileImg: profile,
  //for more icons check: https://react-icons.github.io/react-icons
  socialLinks: [
    {
      icon: MdLocationOn,
      title: "Adana/Turkey",
    },
    {
      icon: MdEmail,
      title: "develioglu306@gmail.com",
      url: "mailto:develioglu306@gmail.com",
    },
    {
      icon: BsGithub,
      title: "@deKadir",
      url: "https://github.com/deKadir",
    },
    {
      icon: BsLinkedin,
      title: "abdulkadir-develioglu",
      url: "https://www.linkedin.com/in/abdulkadir-develioglu/",
    },
    {
      icon: BsFillTelephoneFill,
      title: "+90 555 046 37 01",
      url: "tel:+905550463701",
    },
  ],
  general: {
    name: "Abdulkadir",
    lastname: "Develioglu",
    fullName: "Abdulkadir Develioglu",
    intro: "",
    experiences: [
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
    ],
    education: [
      {
        university: "Cukurova University",
        department: "Computer Engineering (English)",
        date: {
          start: "2019",
          end: "2024",
        },
      },
    ],
    languages: ["Turkish", "English"],
  },
  sections: [{}],
  frontend: {
    intro: "",
    skills: [
      "HTML & CSS & SASS",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React js",
      "Next js",
      "Svelte",
      "Redux toolkit",
      "Vercel",
      "React Query",
      "Git & Gitlab",
    ],
    projects: [
      {
        title: "Portfolio Website",
        description:
          "Portfolio website for myself and for fullstack developers created using React and Tailwind.",
        url: "https://cv-template-one.vercel.app/",
      },
      {
        title: "Cubook",
        description:
          "Social media website for university students. Created using React, Tailwind and developed by 3 students.",
        url: "https://drive.google.com/drive/folders/1FE_EG_muhtOkCyO8jt63rVdOe1PadSMG",
      },

      {
        title: "Oak Hill Coin",
        description:
          "Crypto coin startup project that is used for buying and selling oak coins. Created using React, SASS, redux.",
        url: "https://oak-hill-coin.vercel.app/",
      },
      {
        title: "2048 game",
        description:
          "2048 is a popular single-player sliding block puzzle game created using React.",
        url: "https://codesandbox.io/s/github/deKadir/2048_game",
      },
      {
        title: "Spotify",
        description: "Spotify clone project created using Svelte kit and tailwind.",
        url: "https://spotify-clone-web-svelte.vercel.app/",
      },
      {
        title: "Kaf Life",
        description:
          "Blockchain technology website. Implemented authentication operations using React.",
        url: "https://kaf-life-frontend.vercel.app/",
      },
      {
        title: "Netflix",
        description: "Netflix landing page created using Next js and firebase",
        url: "https://netflix-clone-web-gamma.vercel.app/",
      },
      {
        title: "3D Card animation",
        description: "3D Card animation using HTML and CSS",
        url: "https://3d-card-effect-one.vercel.app/",
      },
      {
        title: "Instagram",
        description:
          "Instagram clone project including authentication, follow-unfollow, chat system. Created using React.",
        url: "https://instagram-web-frontend.vercel.app/",
      },
      {
        title: "SpaceX Events",
        description: "SpaceX landing page that is created by using HTML, CSS, javascript",
        url: "https://spacex-web-clone.vercel.app/",
      },
      {
        title: "Covid tracker",
        description:
          "Covid tracker website that shows cases and deaths. Created using Vue.js and tailwind.",
        url: "https://covid-tracker-vue-dusky.vercel.app/",
      },
      {
        title: "Image editor",
        description: "Image editor for rotating, flipping and adding effects to images.",
        url: "https://image-editor-orcin.vercel.app/",
      },
      {
        title: "Web Code Editor",
        description: "Web Code editor for web developers including HTML, CSS, js languages.",
        url: "https://web-code-editor.vercel.app/",
      },
      {
        title: "Comparison Slider",
        description: "Slider that is used for comparision of images. Created using HTML, CSS, JS.",
        url: "https://github.com/deKadir/comparison-slider",
      },
      {
        title: "3D Portfolio",
        description: "3D portfolio website created using three.js",
        url: "https://kadir-3d-portfolio.vercel.app/",
      },
    ],
  },
  backend: {
    intro: "",
    skills: [
      "Node js",
      "Typescript",
      "Express",
      "Mongodb",
      "Socket.io",
      "Scrapping",
      "Postman",
      "Heroku",
      "Git & Gitlab",
    ],
    projects: [
      {
        title: "F1 Grand prix",
        description:
          "Tracking application for formula 1 fans including standings, race results, team and driver details.",
        url: "https://play.google.com/store/apps/details?id=com.develioglu306.f1mobile",
      },
      {
        title: "Cubook",
        description:
          "Social media website for university students. Created using React, Tailwind and developed by 3 students.",
        url: "https://drive.google.com/drive/folders/1FE_EG_muhtOkCyO8jt63rVdOe1PadSMG",
      },
      {
        title: "Instagram",
        description:
          "Instagram clone project including authentication, follow-unfollow, chat system.",
        url: "https://instagram-web-frontend.vercel.app/",
      },
      {
        title: "ASANA",
        description: "Task management app like trello",
        url: "https://github.com/deKadir/asana-backend",
      },
      {
        title: "Youtube",
        description:
          "Youtube clone backend including authentication, uploading video and viewing videos.",
        url: "https://github.com/deKadir/youtube-clone-backend",
      },
    ],
  },
  mobile: {
    intro: "",
    skills: [
      "React Native",
      "Javascript",
      "Expo",
      "RN Cli",
      "React query",
      "Firebase",
      "Redux toolkit",
      "Git & Gitlab",
    ],
    projects: [
      {
        title: "F1 Grand prix",
        description:
          "Tracking application for formula 1 fans including standings, race results, team and driver details. Available on google play.",
        url: "https://play.google.com/store/apps/details?id=com.develioglu306.f1mobile",
      },
      {
        title: "Uber",
        description: "Uber Clone application created using React Native.",
        url: "https://github.com/deKadir/react-native-uber-clone",
      },
      {
        title: "Ulmo",
        description: "Ulmo e commerce applicatio created using React Native",
        url: "https://github.com/deKadir/ulmo-e-commerce-mobile",
      },
      {
        title: "Turkish Dictionary",
        description: "Turkish dictionary application created using React native",
        url: "https://github.com/deKadir/Turkce-Sozluk",
      },
    ],
  },
};

export default myInfo;
