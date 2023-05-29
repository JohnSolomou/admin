import React from "react";
import "./homepage.css";
import nfx from "./netflix-clone.png";
// import { Link } from "react-router-dom";
function HomePage() {
  return (
    <section class="container">
      <div class="left-half">
        <article>
          <h1>Netflix-clone</h1>
          <img src={nfx} width="600px" alt="" />
        </article>
      </div>
      <div class="right-half">
        <article>
          <h1>Netflix-clone Admin Login</h1>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
