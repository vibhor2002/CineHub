import React from "react";
import "../App.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        CineHub - Add Your Favorites <br />
        Anytime, Anywhere...
      </h1>
      <h2 className="home-subtitle">
        Step into a world where entertainment where you can decide what to watch
        next and share your favorites with the world.
      </h2>
      <button className="home-explore-button">
        <a href="/movies">
          Explore
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </button>
    </div>
  );
}
