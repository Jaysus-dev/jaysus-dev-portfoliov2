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
        <section className="main-section section grid"> Profle</section>
        <section className="main-section section grid"> Career Path</section>
        <section className="main-section section grid"> Info</section>
        <section className="main-section section grid"> Info</section>
      </main>
    </div>
  );
}

export default App;
