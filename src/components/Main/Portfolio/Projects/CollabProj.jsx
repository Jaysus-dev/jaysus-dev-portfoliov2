import React from "react";
import "./Projects.css";
import Data from "../../../../assets/json/Data.json";
import { iconComponents } from "../../../../assets/json/Icon";



function CollabProj() {
  const IconComponent = iconComponents.LuArrowUpRight
  return (
    <div className="project">
      <h2 className="section__title">Hack & Stack</h2>
      <span className="section__subtitle"> Team collaboration Projects</span>
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__content grid">
            {Data.collabproj.map((colproj) => (
          
              <div key={colproj.id} className="project__data">
                <video
                  src={colproj.vid}
                  className="project__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div className="col__project__info">
                  <h3>{colproj.title}</h3>
                  <div className="project__stack">
                    {colproj.stack?.map((stack, stackIndex) => (
                      <p key={stackIndex}>{stack.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <span className="project__links">View Project Archive <IconComponent className="project__links-icon" />
        </span>
    </div>
  );
}

export default CollabProj;
