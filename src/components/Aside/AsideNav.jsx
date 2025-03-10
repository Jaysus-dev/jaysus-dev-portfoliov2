import React from "react";
import { iconComponents } from "../../assets/json/Icon";
import Data from "../../../src/assets/json/Data.json";

function AsideNav() {
  return (
    <nav className="aside__list grid">
      <ul>
        {Data.links.map((link, index) => {
          const IconComponent = iconComponents[link.icon]; // Get the icon component
          return (
            <li key={index} className="aside__item">
              <a href={link.to} className={`aside__link ${link.className}`}>
                <IconComponent /> {/* Render the icon */}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default AsideNav;
