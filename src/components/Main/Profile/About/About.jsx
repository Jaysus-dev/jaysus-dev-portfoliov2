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
            I specialize in transforming ideas into polished web experiences.
            From interactive user interfaces to reliable backend services, I
            build applications that are intuitive, performant, and ready for
            production as a{" "}
            <strong>Front-End Engineer & Full-Stack Developer</strong>.
          </p>

          <p>
            Currently, I work as a <strong>Full-Stack Developer III</strong> at
            the <strong>National Center for Mental Health</strong>, My current
            tech stack is <strong>LaraVue</strong> with{" "}
            <strong>TypeScript</strong>, which I use to develop scalable
            enterprise healthcare systems that improve clinical workflows and
            patient management.
          </p>
          <p>
            Outside of work, I enjoy exploring new technologies, building
            personal projects, and continuously improving my skills to create
            better digital experiences.
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
