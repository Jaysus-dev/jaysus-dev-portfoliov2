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
            I’m a front-end developer based in Makati City, Philippines,
            specializing in crafting accessible precision-driven designs. I
            develop responsive, user-friendly websites using{" "}
            <strong>HTML, CSS, JavaScript</strong>, and frameworks like{" "}
            <strong>ReactJS</strong> and <strong>TailwindCSS</strong>.
          </p>

          <p>
            In my previous role at <strong>BDI Capital Ltd.</strong> as a{" "}
            <strong>Junior Web Developer</strong> with a{" "}
            <strong>full-stack focus</strong>, building and maintaining
            websites. My role included managing website hosting, deployment and
            email domain configuration.
          </p>

          <p>
            Currently, I’m enhancing my expertise through courses on platforms
            like <strong>Coursera</strong> and <strong>Udemy</strong>, focusing
            on front-end development and modern frameworks.
          </p>

          <p>
            My goal is to transition into a{" "}
            <strong>full-stack developer</strong> role at a{" "}
            <strong>forward-thinking company</strong>, contributing to{" "}
            <strong>innovative projects</strong> while advancing my career.
            Outside work, I explore new technologies, work on personal projects,
            and embrace <strong>lifelong learning</strong> to create{" "}
            <strong>impactful digital experiences</strong>.
          </p>
        </article>
      </div>
      <Scroll />
    </div>
  );
}

export default About;
