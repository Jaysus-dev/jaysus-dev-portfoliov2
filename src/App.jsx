import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import AsideNav from "./components/Aside/Aside";

function App() {
  const navigate = useNavigate();

  {
    /*  // Redirect to the root path ("/") on every render
  useEffect(() => {
    navigate("/profile", { replace: true });
  }, [navigate]);
*/
  }
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
    </>
  );
}

export default App;
