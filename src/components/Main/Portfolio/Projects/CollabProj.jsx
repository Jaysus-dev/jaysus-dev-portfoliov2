import React from "react";
import "./Projects.css";
import Data from "../../../../assets/json/Data.json";

function CollabProj() {
    return (
        <div className="project">
        <h2 className="section__title">Collab Proj.</h2>
        <span className="section__subtitle">Recent & Selected Projects</span>
        <div className="project__container">
          <div className="project__wrapper">
            <div className="project__content grid">
              {Data.projects.map((proj) => (
                <div key={proj.id} className="project__data">
                  <video
                    src={proj.img}
                    className="project__video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                  <div className="project__info">
                    <h3>{proj.title}</h3>
                    <span>{proj.subtitle}</span>
                    <p>{proj.desc}</p>
                    <div className="project__stack">
                      {proj.stack?.map((stack, stackIndex) => (
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
    )
}
    

    export default CollabProj