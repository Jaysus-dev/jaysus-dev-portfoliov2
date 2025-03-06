import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function AsideSocials() {
  const socials = [
    { icon: <FaFacebookSquare />, link: "www.facebook.com" },
    { icon: <RiInstagramFill />, link: "www.instagram.com" },
    { icon: <FaLinkedin />, link: "www.linkedin.com" },
    { icon: <FaGithub />, link: "www.github.com" },
  ];

  return (
    <div className="aside-social grid">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className="aside-social-icon"
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default AsideSocials;
