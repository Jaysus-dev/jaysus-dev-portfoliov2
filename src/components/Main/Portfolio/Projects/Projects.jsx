import React from "react";
import "./Projects.css";
import Data from "../../../../assets/json/Data.json";

function Projects() {
  return (
    <div className="project section__margin">
      <h2 className="section__title">Recent Work.</h2>
      <span className="section__subtitle">Recent & Selected Projects</span>
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__content grid">
            {Data.projects.map((proj) => (
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                <div key={proj.id} className="project__data">
                  <video
                    src={proj.vid}
                    className="project__video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                  <a href={proj.ur}></a>
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
