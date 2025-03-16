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
} from "react-icons/fa";
import {
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiPhpmyadmin,
} from "react-icons/si";
import { TbSql, TbBrandReactNative } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { PiFigmaLogoFill, PiFileSqlFill } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";

const tools = [
  {
    id: "frontend",
    title: "Languages",
    data: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "NodeJS", icon: <FaNode /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    id: "frontend",
    title: "Libraries & Frameworks",
    data: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <FaSass /> },
    ],
  },
  {
    id: "database",
    title: "Database",
    data: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL", icon: <PiFileSqlFill /> },
      { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    id: "versioncontrol",
    title: "Tools & Platforms",
    data: [
      { name: "VScode", icon: <VscVscodeInsiders /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
      { name: "Wordpress", icon: <FaWordpress /> },
      { name: "Figma", icon: <PiFigmaLogoFill /> },
      { name: ".Git", icon: <BsGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
    ],
  },
];

export default tools;
