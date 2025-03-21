import React from "react";

function Projects() {
  return (
    <div className="project">
      <h2 className="section__title">Recent Work.</h2>
      <span className="section__subtitle">Recent & Selected Projects</span>
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__content grid">
            <div className="project__data">
              data
              <img src="" alt="" />
              <div className="project__info">
                <h3>title</h3>
                <span>subtitle</span>
                <p>desc</p>
                <p>stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
