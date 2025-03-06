import React from "react";
import "./Aside.css";
import Profile from "../../assets/img/profile.jpg";
import AsideData from "./AsideData";
import AsideSocials from "./AsideSocials";
import AsideNav from "./AsideNav";

function Aside() {
  return (
    <header className="aside section " id="aside">
      <div className="aside-container  grid">
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
      <div className="aside-bot"></div>
    </header>
  );
}
export default Aside;
