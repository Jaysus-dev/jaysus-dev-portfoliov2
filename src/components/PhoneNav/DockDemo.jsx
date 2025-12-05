import React from "react";
import { UserRoundPen, BriefcaseBusiness, Wallpaper } from "lucide-react";
import { Link } from "react-router-dom";
import "../PhoneNav/DockDemo.css";

const DATA = {
  navbar: [
    { to: "/profile", icon: UserRoundPen, label: "Profile" },
    { to: "/expertise", icon: BriefcaseBusiness, label: "Expertise" },
    { to: "/portfolio", icon: Wallpaper, label: "Portfolio" },
  ],
};

export default function DockDemo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="dock">
        {DATA.navbar.map((item) => (
          <div key={item.label} className="dock-item">
            <Link to={item.to} title={item.label}>
              <item.icon style={{ width: "32px", height: "32px" }} />
            </Link>
            <span className="dock-tooltip">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
