import React from "react";
import "./About.css";

import Profile_pic from "../../../../assets/img/profile.jpg";
import { iconComponents } from "../../../../assets/json/Icon";
import Data from "../../../../assets/json/Data.json";
import Scroll from "../Scroll";

function About() {
  return (
    <div className="about section ">
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
            I’m a front-end developer specializing in crafting accessible
            precision-driven designs. I develop responsive, user-friendly
            websites using <strong>HTML, CSS, JavaScript</strong>, and
            frameworks like <strong>ReactJS</strong> and{" "}
            <strong>TailwindCSS</strong>.
          </p>

          <p>
            Previously, I worked as a <strong>Junior Web Developer</strong> at{" "}
            <strong>BDI Capital Ltd.</strong>, where I focused on{" "}
            <strong>full-stack development</strong>. My responsibilities
            included managing hosting, deployment, and configuring email
            domains.
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
