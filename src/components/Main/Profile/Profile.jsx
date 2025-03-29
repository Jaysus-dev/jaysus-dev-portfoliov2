import React from "react";
import About from "./About/About";
import Career from "./Career/Career";
import { iconComponents } from "../../../assets/json/Icon";

function Profile() {
  const IconComponent = iconComponents.LuArrowUpRight;
  return (
    <>
      <About />
      <Career />
      <a href="" className="resume__wrapper" target="__blank">
        View Full Résumé <IconComponent className="resume__icon" />
      </a>
    </>
  );
}

export default Profile;
