import React from "react";
import "./Aside.css";
import Profile from "../../assets/img/profile.jpg";
import AsideData from "./AsideData";
import AsideSocials from "./AsideSocials";
import AsideNav from "./AsideNav";
import { RiRadioButtonLine } from "react-icons/ri";

function Aside() {
  return (
    <header className="aside section " id="aside">
      <div className="aside-container  grid">
        <div className="aside-online">
          <p className="aside-stat">
            <RiRadioButtonLine className="aside-ping" />
            Available for Hire{" "}
          </p>
        </div>
        <div className="aside-content grid">
          <AsideSocials />
          <img src={Profile} className="aside-img" alt="aside_profile" />
        </div>

        <div className="aside-mid">
          <AsideData />
          <div className="aside-nav">
            <AsideNav />
          </div>
        </div>
      </div>
      <div className="aside-bot">
        Designed and Coded by
        <a href="#"> jaysus-dev.</a>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </header>
  );
}
export default Aside;
