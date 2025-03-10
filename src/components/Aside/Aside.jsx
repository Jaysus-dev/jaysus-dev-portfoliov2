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
      <div className="aside__container  grid">
        <div className="aside__online">
          <p className="aside__stat">
            <RiRadioButtonLine className="aside__ping" />
            Available For Hire
          </p>
        </div>
        <div className="aside__content grid">
          <AsideSocials />
          <img src={Profile} className="aside__img" alt="aside__profile" />
        </div>
        <div className="aside__mid">
          <AsideData />
          <div className="aside__nav">
            <AsideNav />
          </div>
        </div>
      </div>
      <div className="aside__bot">
        Designed and Coded by
        <a href="#"> jaysus-dev.</a>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </header>
  );
}
export default Aside;
