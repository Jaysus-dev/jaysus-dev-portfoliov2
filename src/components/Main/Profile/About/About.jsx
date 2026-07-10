import React from "react";
import "./About.css";

import Profile_pic from "../../../../assets/img/profile.jpg";
import { iconComponents } from "../../../../assets/json/Icon";
import Data from "../../../../assets/json/Data.json";
import Scroll from "../Scroll";

function About() {
  return (
    <div className="about  section__margin">
      <div className="profile__container grid ">
        <div className="profile__data">
          <img
            className="profile__pic"
            src={Profile_pic}
            alt="profile picture"
          />
          {Data.profile.map((profile, index) => {
            const IconComponent = iconComponents[profile.icon];
            return (
              <div key={index} className="profile__name">
                <h3>
                  {profile.name}
                  <IconComponent className={`${profile.className}`} />
                </h3>
                <span>{profile.subname}</span>
              </div>
            );
          })}
        </div>

        <article className="profile__tweet">
          <p>
            I build{" "}
            <strong>fast, scalable, and user-focused web applications</strong>{" "}
            that combine clean design with reliable engineering. As a{" "}
            <strong>Full Stack Developer</strong>, I specialize in creating
            modern, responsive, and high-performance solutions using{" "}
            <strong>Laravel, Vue, React, TypeScript, JavaScript,</strong> and{" "}
            <strong>Tailwind CSS</strong>. From intuitive user interfaces to
            robust backend APIs, I transform ideas into seamless digital
            experiences.
          </p>

          <p>
            Currently, I work as a <strong>Full Stack Developer III</strong> at
            the <strong>National Center for Mental Health</strong>, where I
            develop and enhance enterprise healthcare systems that improve
            clinical workflows and patient management. Previously, I worked as a{" "}
            <strong>Junior Web Developer</strong> at{" "}
            <strong>BDI Capital Ltd.</strong>, delivering full-stack solutions
            while managing deployments, hosting infrastructure, and domain
            configurations.
          </p>

          <p>
            Outside of work, I enjoy exploring new technologies, working on
            personal projects, and embracing lifelong learning to create
            meaningful digital experiences.
          </p>
        </article>
        <div className="profile__exp">
          {Data.exp.map((profile, expIndex) => {
            const IconComponent = iconComponents[profile.icon];
            return (
              <div key={expIndex} className="profile__expbox">
                <IconComponent className={profile.className} />
                <h3>{profile.title}</h3>
                <span>{profile.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Scroll />
    </div>
  );
}

export default About;
