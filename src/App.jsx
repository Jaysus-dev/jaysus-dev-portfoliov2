import React from "react";
import "./App.css";
import AsideNav from "./components/Aside/Aside";
import Profile from "./components/Main/Profile/Profile";

function App() {
  return (
    <div className="main-container container grid">
      <aside className="main-aside  grid" id="aside">
        <AsideNav />
      </aside>
      <main className="main-content section  " id="main">
        <Profile />
      </main>
    </div>
  );
}

export default App;
