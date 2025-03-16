import React from "react";
import "./TechStack.css";
import IconCloudDemo from "./IconCloudDemo";
import tools from "./TechStackData";

function TechStack() {
  return (
    <section className="techstack section__margin">
      <h2 className="section__title">TechStack.</h2>
      <span className="section__subtitle">
        modern tech for seamless performance
      </span>
      <div className="techstack__container grid">
        <IconCloudDemo />
        <div className="techstack__data grid">
          <div className="toolstack__container grid">
            {tools.map(({ id, title, data }) => (
              <div className="tools__container" key={id}>
                <span className="tools__title">{title} : </span>
                <div className="tools__data ">
                  {data.map(({ name, icon }, index) => (
                    <p key={index}>
                      {icon}
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
