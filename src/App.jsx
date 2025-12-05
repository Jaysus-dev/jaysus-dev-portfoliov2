import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import AsideNav from "./components/Aside/Aside";
import DockDemo from "./components/PhoneNav/DockDemo";

function App() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Redirect to /profile on first render
  useEffect(() => {
    navigate("/profile", { replace: true });
  }, [navigate]);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const isHiddenPage =
    location.pathname === "/expertise" || location.pathname === "/portfolio";

  return (
    <>
      <div
        className={`main-container container grid ${
          isHiddenPage ? "hide-aside " : ""
        }`}
      >
        <aside className="main-aside grid" id="aside">
          <AsideNav />
        </aside>

        <main className="main-content section " id="main">
          <Outlet />
        </main>
      </div>

      {/* Render DockDemo only on mobile */}
      {isMobile && <DockDemo />}
    </>
  );
}

export default App;
