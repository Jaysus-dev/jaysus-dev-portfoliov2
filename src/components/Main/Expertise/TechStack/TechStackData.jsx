import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaPhp,
  FaGithub,
  FaGitlab,
  FaWordpress,
  FaSass,
  FaVuejs,
  FaLaravel,
} from "react-icons/fa";
import {
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiPhpmyadmin,
  SiTypescript,
  SiInertia,
  SiRailway,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandFramerMotion } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { PiFigmaLogoFill, PiFileSqlFill } from "react-icons/pi";
import { RiNextjsFill, RiMicrosoftCopilotLine } from "react-icons/ri";

const tools = [
  {
    id: "frontend",
    title: "Languages",
    data: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    id: "framework",
    title: "Libraries & Frameworks",
    data: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Inertia.js", icon: <SiInertia /> },

      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <FaSass /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    ],
  },
  {
    id: "database",
    title: "Database",
    data: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
      { name: "MSSQL", icon: <RiMicrosoftCopilotLine /> },
      { name: "SQL", icon: <PiFileSqlFill /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    id: "versioncontrol",
    title: "Tools & Platforms",
    data: [
      { name: "VScode", icon: <VscVscodeInsiders /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "Wordpress", icon: <FaWordpress /> },
      { name: "Figma", icon: <PiFigmaLogoFill /> },
      { name: ".Git", icon: <BsGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
    ],
  },
];

export default tools;
