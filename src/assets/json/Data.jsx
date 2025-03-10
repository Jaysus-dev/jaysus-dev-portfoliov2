import { useTypewriter } from "react-simple-typewriter";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { PiImageLight } from "react-icons/pi";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import rtu from "../../../public/img/RTU_Logo.jpg";

// Typewriter configuration
export const useTypeWriter = () => {
  const [typeWriter] = useTypewriter({
    words: [
      "Frontend Web Developer",
      "Junior Web Developer",
      "UI/UX Designer",
      "Graphic Artist",
    ],
    typeSpeed: 100,
    deleteSpeed: 40,
    loop: true,
  });

  return typeWriter;
};

// Navlinks
export const links = [
  {
    className: "nav-icon",
    icon: <IoPersonOutline />,
    title: "<About />",
    to: "#",
  },
  {
    className: "nav-icon",
    icon: <HiOutlineBriefcase />,
    title: "<Expertise />",
    to: "#",
  },
  {
    className: "nav-icon",
    icon: <PiImageLight />,
    title: "<Portfolio />",
    to: "#",
  },
];
// Soclinks
export const socials = [
  { icon: <FaFacebookSquare />, link: "https://www.facebook.com/the2nddd" },
  {
    icon: <RiInstagramFill />,
    link: "https://www.instagram.com/aintjaysus/",
  },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/222371303/" },
  { icon: <FaGithub />, link: "https://github.com/Jaysus-dev" },
];
