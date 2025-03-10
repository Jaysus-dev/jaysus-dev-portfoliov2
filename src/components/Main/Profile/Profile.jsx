import React from "react";
import "./Profile.css";
import Profile_pic from "../../../assets/img/profile.jpg";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function Profile() {
  return (
    <div className="profile grid">
      <div className="profile__container grid">
        <div className="profile__data">
          <img
            className="profile__pic"
            src={Profile_pic}
            alt="profile picture"
          />
          <div className="profile__name">
            <h3>
              Jay Estoquia <RiVerifiedBadgeFill className="profile__icon" />
            </h3>
            <span>@jaysus-dev</span>
          </div>
        </div>
        <article className="profile__tweet">
          <p>
            I’m a front-end developer based in Makati City, Philippines,
            specializing in crafting <strong>accessible</strong>,{" "}
            <strong>precision-driven designs</strong>. I develop responsive,
            user-friendly websites using <strong>HTML, CSS, JavaScript</strong>,
            and frameworks like <strong>ReactJS</strong> and{" "}
            <strong>TailwindCSS</strong>.
          </p>
          <br />
          <p>
            As a <strong>Junior Web Developer</strong> at{" "}
            <strong>BDI Capital Ltd.</strong>, I focused on{" "}
            <strong>full-stack development</strong>, building and maintaining
            web applications. My role included managing{" "}
            <strong>website hosting</strong>, <strong>deployment</strong> and{" "}
            <strong>email domain configuration</strong>.
          </p>
          <br />
          <p>
            Currently, I’m enhancing my expertise through courses on platforms
            like <strong>Coursera</strong> and <strong>Udemy</strong>, focusing
            on <strong>front-end development</strong> and{" "}
            <strong>modern frameworks</strong>.
          </p>
          <br />
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
    </div>
  );
}

export default Profile;
