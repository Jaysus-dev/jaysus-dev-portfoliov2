import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { PiImageLight } from "react-icons/pi";

function AsideNav() {
  const links = [
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

  return (
    <nav className="aside-list grid">
      <li className="aside-item">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.to}
            className={`aside-link ${link.className}`}
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </li>
    </nav>
  );
}

export default AsideNav;
