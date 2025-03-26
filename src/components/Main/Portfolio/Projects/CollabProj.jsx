import React from "react";
import "./Projects.css";
import Data from "../../../../assets/json/Data.json";

function CollabProj() {
  return (
    <div className="project">
      <h2 className="section__title">Collaboration</h2>
      <span className="section__subtitle">Hack & Stack Projects</span>
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
                <div className="project__info">
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
    </div>
  );
}

export default CollabProj;
