import React from "react";
import { iconComponents } from "../../assets/json/Icon";
import Data from "../../assets/json/Data.json";

function AsideSocials() {
  return (
    <div className="aside-social grid">
      {Data.socials.map((social, index) => {
        const IconComponent = iconComponents[social.icon];
        return (
          <a
            key={index}
            href={social.link}
            className="aside-social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}

export default AsideSocials;
