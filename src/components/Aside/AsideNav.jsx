import React, { useState } from "react";
import { iconComponents } from "../../assets/json/Icon";
import Data from "../../../src/assets/json/Data.json";
import { Link } from "react-router-dom";

function AsideNav() {
  const [activeNav, setActiveNav] = useState("/profile");
  return (
    <nav className="aside__list grid  aside__menu">
      <ul>
        {Data.links.map((link, index) => {
          const IconComponent = iconComponents[link.icon]; // Get the icon component
          return (
            <li key={index} className="aside__item ">
              <Link
                to={link.to}
                onClick={() => setActiveNav(link.to)}
                className={`${link.className} ${
                  activeNav === link.to ? "active-link" : ""
                } `}
              >
                <IconComponent />
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default AsideNav;
