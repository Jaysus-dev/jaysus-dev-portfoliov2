import React from "react";
import "./App.css";
import AsideNav from "./components/Aside/Aside";

function App() {
  return (
    <div className="main-container container grid">
      <aside className="main-aside grid" id="aside">
        <AsideNav />
      </aside>
      <main className="main-content" id="main">
        About
      </main>
    </div>
  );
}

export default App;
